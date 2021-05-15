const Utils = require('vscode-uri').Utils;

function parse(uri) {
    if (fileExtention(uri) != ".js") {
        throw "Must be a JavaScript file"
    }

    return {
        name: fileName(uri),
        directory: directoryName(uri)
    }
    
}

function fileExtention(uri) {
    return Utils.extname(uri);
}

function directoryName(uri) {
    return Utils.dirname(uri).fsPath + '/';
}

function fileName(uri) {
    return withNoFileExt(Utils.basename(uri));
}

function withNoFileExt(file) {
    return file.split('.')[0]    
}

exports.parse = parse