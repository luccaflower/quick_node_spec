const Utils = require('vscode-uri').Utils;

const service = testPath => {
    const parse = uri => {
        if (fileExtention(uri) != ".js") {
            throw "Must be a JavaScript file"
        }
    
        return {
            name: fileName(uri),
            path: testDirectoryName(uri),
        }
    }

    const fileExtention = uri => {
        return Utils.extname(uri);
    }
    
    const testDirectoryName = uri => {
        return Utils.joinPath(Utils.dirname(uri), testPath).fsPath
    }
    
    const fileName = uri => {
        return withNoFileExt(Utils.basename(uri));
    }
    
    const withNoFileExt = file => {
        return file.split('.')[0]    
    }

    return {
        parse: parse
    }
}

exports.service = service
