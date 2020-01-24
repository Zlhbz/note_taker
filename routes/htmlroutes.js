const path = require("path")


function connect_html(server) {
    server.get("/notes", function (req, res) {
        console.log("/notes -> called!")
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });



    server.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}

module.exports = connect_html;