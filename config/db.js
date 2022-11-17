const mongoose = require('mongoose');

const url_db = 'mongodb://localhost:27017/todolist'

const db = mongoose.connect(url_db)

module.exports = db