
// const fs = require("fs");
const express = require("express");
const path = require("path");
const htmlRoute = require("./routes/htmlroutes");

const app = express();

var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlRoute(app);

// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});


