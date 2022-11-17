const express = require("express");
const router = express.Router();

const { 
    // getAllToDoList, 
    // getDetailToDoList, 
    addToDoList, 
    // updateToDoList, 
    // deleteToDoList, 
    deleteAllToDoList} = require("../controllers/todolist.controller");

// router.get("/", getAllToDoList);
// router.get("/:id", getDetailToDoList);
router.post("/", addToDoList);
// router.patch("/:id", updateToDoList);
// router.delete("/:id", deleteToDoList);
router.delete("/", deleteAllToDoList);

module.exports = router;