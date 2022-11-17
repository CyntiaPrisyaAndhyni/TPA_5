const mongoose = require('mongoose');
const { Schema } = mongoose;

const todolistSchema = new Schema({
    title : String,
    todo : String,
    date : Date,
});

const Todolist = mongoose.model("Todolist", todolistSchema)

module.exports = Todolist