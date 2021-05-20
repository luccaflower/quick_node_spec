const path = require('path')
const vscode = require('vscode')
const vscodeVariables = require('vscode-variables')

const posixPath = pathFromConfig => {
    return pathFromConfig
        .split(path.sep).join(path.posix.sep)
}

const configurations = () => {
    return vscode.workspace.getConfiguration("quick-node-spec")
}


exports.config = () => {
    return {
        ".js": {
            ext: configurations().javascript.ext,
            testFolder: posixPath(vscodeVariables(configurations().testFolder)),
            template: configurations().javascript.template
        },
        ".ts": {
            ext: configurations().typescript.ext,
            testFolder: posixPath(vscodeVariables(configurations().testFolder)),
            template: configurations().typescript.template
        }
    }
}
