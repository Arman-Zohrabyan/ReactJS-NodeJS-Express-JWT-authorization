const express = require('express');
const path = require('path');



const router = new express.Router();

// router.get('/signup', (req, res, next) => {
// 	res.sendFile(path.join(__dirname, "../static/index.html"));
// });

router.get('/*', (req, res, next) => {
	res.sendFile(path.join(__dirname, "../static/index.html"));
});

// router.get('/login', (req, res, next) => {
// 	res.sendFile(path.join(__dirname, "../static/index.html"));
// });


module.exports = router;
