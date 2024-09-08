const express = require("express");
const app = express();

app.get('/home', (req, res) => {

    res.send("this is the home page");
});

app.listen(7070, () => {

    console.log("webapp is listening to port 5173");
});