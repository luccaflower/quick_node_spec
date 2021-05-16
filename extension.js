// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const createSpecInWorkspace = require('./src/createSpecInWorkspace');
const uri = require('./src/uriParser');
const view = require('./src/vscodeView');
const fs = require('./src/fsAdapter');
const chai = require('./src/chaiSpec')
const cfg = require('./src/specConfig')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	let disposable = vscode.commands.registerCommand(
		'create-chai-spec.create', 
		function () {
			const currentFile = vscode.window.activeTextEditor.document
			if (currentFile.isUntitled ) {
				vscode
					.window
					.showErrorMessage("Current file must be saved on disk")
			} else {
				createSpecInWorkspace.facade({
					documentParser: uri,
					view: view,
					store: fs,
					spec: chai,
					config: cfg.config
				}).create(currentFile.uri)
			}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
