const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const config = require('../../config');

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


module.exports = router;
