const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const User = require('mongoose').model('User');
const config = require('../../config');
const PathHelper = require('../pathHelper.js');
const FsHelper = require('../helpers/fsHelper.js');


const router = new express.Router();


router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/getUserData', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    const userId = decoded.sub;
    User.findById(userId, (userErr, user) => {
      res.status(200).json({
        user: {
          _id: user._id,
          createdAt: user.createdAt,
          email: user.email,
          name: user.name,
          surname: user.surname,
          year: user.year,
          month: user.month,
          day: user.day,
          gender: user.gender,
          address: user.address,
          profession: user.profession,
          profileImages: user.profileImages,
          marital_status: user.marital_status,
        },
        success: true
      });
    });
  });
});

router.put('/editUserData', (req, res) => {
  const data = req.body
  delete data.email;
  delete data.createdAt;

  User.findById(data._id, (userErr, user) => {
    user.set(data);
    user.save(function (err) {
      if (err) return handleError(err);
      res.status(200).json({
        success: true
      });
    });
  });
});



const imageFormats = ['.jpg', '.jpeg', '.gif', '.png'];

router.post('/changeProfileImage', (req, res) => {
  const file = req.files.image;
  const fileExt = path.extname(file.name);
  const userId = req.body.id;
  const userDir = PathHelper.userImageFolder(userId);

  // check if directory is exists
  FsHelper.checkAndCreateDirSync(userDir);

  // check image extention
  if (imageFormats.includes(fileExt.toLowerCase())) {
    const targetPath = path.resolve(`${userDir}/${file.name}`);
    fs.rename(file.path, targetPath, (err) => { if (err) throw err; });
  } else {
    fs.unlink(file.path, function (err) { if (err) throw err; });
  }

  // change user.profileImage path
  User.findById(userId, (userErr, user) => {
    const profileImageURL = PathHelper.userProfileImage(userId, file.name);
    user.profileImages.push(profileImageURL);
    user.save(function (err) {
      if (err) return handleError(err);
      res.status(200).json({
        success: true,
        profileImages: user.profileImages,
      });
    });
  });
});


module.exports = router;
