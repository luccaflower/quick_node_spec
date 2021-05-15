const fsAdapter = require('./fsAdapter');

function save(file) {
    console.log("saving file");
    fsAdapter.createFile(file.path, file.content)
}

exports.save = save