const Utils = require('vscode-uri').Utils;

function service(testPath, sourcePath) {
    const parse = uri => {
        if (fileExtention(uri) != ".js") {
            throw "Must be a JavaScript file"
        }
    
        return {
            name: fileName(uri),
            path: testDirectoryName(uri),
        }
    }

    function fileExtention(uri) {
        return Utils.extname(uri);
    }
    
    function testDirectoryName(uri) {
        return Utils.joinPath(Utils.dirname(uri), testPath).fsPath
    }
    
    function fileName(uri) {
        return withNoFileExt(Utils.basename(uri));
    }
    
    function withNoFileExt(file) {
        return file.split('.')[0]    
    }

    return {
        parse: parse
    }
}

exports.service = service
