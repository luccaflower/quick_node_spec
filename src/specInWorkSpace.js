const vscode = require('vscode');
const createSpecFile = require('./createSpecFile');
const Utils = require('vscode-uri').Utils;

function createSpecInWorkSpace(uri) {
    if (Utils.extname(uri) != ".js") {
        vscode.window.showErrorMessage("File must have .js extention")
        return
    }
    const fileName = removeFileExt(Utils.basename(uri))
    const directory = Utils.dirname(uri).fsPath + '/'
    const spec = createSpecFile.createSpec(directory, fileName)
    const testColumn = vscode.ViewColumn.Beside
    vscode.window.showTextDocument(
        vscode.Uri.file(spec), 
        { viewColumn: testColumn, preserveFocus: true }
    )

};

function removeFileExt(file) {
    return file.split('.')[0]    
}

exports.createInWorkspace = createSpecInWorkSpace

