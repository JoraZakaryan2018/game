var express = require("express");
var app = express();
var server = require('http').Server(app);


app.use(express.static("../public"));

app.get("/", function (req, res) {
    res.redirect("/public/index.html");
})