const fs = require('fs');

function createFile(path, data) {
    fs.writeFileSync(path, data)
};

exports.createFile = createFile;