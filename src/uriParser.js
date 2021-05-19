const Utils = require('vscode-uri').Utils;

const parse = uri => {

    const pathTo = uri => {
        return Utils.dirname(uri).fsPath
    }
    
    const fileName = uri => {
        return withNoFileExt(Utils.basename(uri));
    }
    
    const withNoFileExt = file => {
        return file.split('.')[0]    
    }

    return {
        name: fileName(uri),
        path: pathTo(uri),
        ext: Utils.extname(uri)
    }
}

exports.parse = parse
