const fs = require("fs");
const dir = "/ProgramData/reactron";
const database = `${dir}/database.json`;

function createFile() {
  fs.writeFile(database, JSON.stringify([], null, 4), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
}

function updateFile() {
  fs.readFile(database, function(err, data) {
    var json = JSON.parse(data);
    json.push({ searchresult: "HELLO" });
    console.log(json);
    fs.writeFile(database, JSON.stringify(json), function(err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  });
}
function datastore() {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    createFile();
  } else if (!fs.existsSync(database)) {
    createFile();
  } else {
    updateFile();
  }
}

module.exports = datastore;
