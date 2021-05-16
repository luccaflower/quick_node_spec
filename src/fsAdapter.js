const fs = require('fs');

function createFile(file) {
    console.log("checking if folder exists: " + file.path)
    if(!fs.existsSync(file.path)) {
        console.log("creating folder: " + file.path);
        fs.mkdirSync(file.path)
    }
    console.log("saving: " + file.path + file.name);
    fs.writeFileSync(file.path + file.name, file.content)
};

exports.createFile = createFile;