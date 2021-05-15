const fs = require('fs');

function createFile(path, data) {
    console.log(`creating file: ${path}`);
    fs.writeFileSync(path, data)
};

exports.createFile = createFile;