const fs = require('fs');

const createFile = file => {
    if(!fs.existsSync(file.path)) {
        fs.mkdirSync(file.path)
    }
    fs.writeFileSync(file.path + file.name, file.content)
};

exports.createFile = createFile;