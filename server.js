
// const fs = require("fs");
const express = require("express");
const path = require("path");
const htmlRoute = require("./routes/htmlroutes");
const apiRoute = require("./routes/apiroutes");

const app = express();

var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiRoute(app);
htmlRoute(app);




app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});


