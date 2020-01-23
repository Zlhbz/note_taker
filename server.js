
// const fs = require("fs");
const express = require("express");
var path = require("path");

const app = express();

var PORT = process.env.PORT || 8080;


app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});


// module.exports