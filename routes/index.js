const express = require("express");
const router = express.Router();

// const authRoute = require('./auth.router');
const todolistRoute = require('./todolist.router');
const userRoute = require('./user.router');

// router.use('/auth', authRoute);
router.use('/todolist', todolistRoute);
router.use('/user', userRoute);

module.exports = router; 