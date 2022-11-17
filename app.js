const express = require('express');
const db = require('./config/db');
const app = express();


const allRouter = require('./routes');

const PORT = process.env.PORT || 3000;

db
.then(() => {
    console.log("database terkoneksi")
})
.catch((err) => {
    console.log(err);
})

app.use(express.json());
app.use(allRouter);

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});