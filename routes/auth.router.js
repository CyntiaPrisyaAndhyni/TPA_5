// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");

// const users = [
//   { id: 1, email: "cyntia@gmail.com", password: "123" },
//   { id: 2, email: "prisya@gmail.com", password: "123" },
// ];

// const KEY = "asdfjsdaklf234234";

// // http://localhost:3000/auth/login
// router.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const userData = user.find(
//     (item) => email === item.email && password === item.password
//   ); 

//   const token = jwt.sign(
//     {
//       id: userData.id,
//     },
//     KEY,
//     {expiresIn: "1m"}
//   );

//   if (userData) {
//     res.json({
//       message: "success login",
//       token,
//     });
//   } else {
//     res.status(401).json({
//       message: "email or password are incorrect",
//     });
//   }
// });

// // http://localhost:3000/auth/register
// router.post("/register", (req, res) => {
//   res.json({
//     message: "success register",
//   });
// });

// module.exports = router;
