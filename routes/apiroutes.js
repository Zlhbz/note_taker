
const fs = require("fs");
const util = require("util");


function get_data(server) {

    server.get("/api/notes", function (req, res) {
        fs.readFile("db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            console.log('Done!');
            console.log(data);
        });
        res.send("working");

    });

    server.post("/api/notes", function (req, res) {
        console.log("req.body --> " + req.body);
        res.json({ "test": "working" })

    });
}

module.exports = get_data;