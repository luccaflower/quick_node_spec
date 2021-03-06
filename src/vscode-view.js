const vscode = require('vscode');

const show = file => {
    const testColumn = columnBeside()
    vscode.window.showTextDocument(
        vscode.Uri.file(file), 
        { viewColumn: testColumn, preserveFocus: true }
    )
}

function columnBeside() {
    return vscode.ViewColumn.Beside;
}

exports.show = show