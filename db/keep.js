const fs = require("fs");
const util = require("util");

const asyncReadFile = util.promisify(fs.readFile);
const asyncWriteFile = util.promisify(fs.writeFile);
let id_number = 0;

class Keep {
    constructor(title, text, id) {
        this.title = title;
        this.text = text;
        this.id = id
    }

    readNote() {
        asyncReadFile("db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            console.log('Done!');
            console.log(data);
        });
    }

    writeNote(note) {
        asyncWriteFile("db/db.json", JSON.stringify(note), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }

}


const test = new Keep("Note_test", "Meeting @ 2 pm", 1);

test.writeNote({ title: "Note_test", text: "Meeting @ 3 pm", id: 2 });
test.readNote();