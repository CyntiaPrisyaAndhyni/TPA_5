// const express = require("express");
// const router = express.Router();



// router.get("/", (req,res) => {
//     res.json({
//         message: "userss",
//     });

// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  // getUser,
  register, 
  login
} = require("../controllers/user.controller");

// router.get("/", getUser);
router.post("/register", register);
router.post("/login",login);

module.exports = router;