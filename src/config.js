const path = require('path')
const vscode = require('vscode')

const posixPath = () => {
    return vscode
        .workspace
        .workspaceFolders[0]
        .uri.fsPath
        .split(path.sep).join(path.posix.sep)
}

exports.config = {
    ".js": {
        ext: ".spec.js",
        testFolder: posixPath() + "/test/",
        template: "mocha-chai-bdd"
    },
    ".ts": {
        ext: ".spec.ts",
        testFolder: posixPath() + "/test/",
        template: "mocha-chai-bdd"
    }
}