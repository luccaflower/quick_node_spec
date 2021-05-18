# TODO
* Minor refactor on config to support multiple languages and templates
* Add support for TypeScript and Jest
* Fix this ugliness in uriParser.js:
```js
//this should check against supported languages defined in config instead,
//and maybe be moved to extention.js?
if (fileExtention(uri) != ".js") {
    throw "Must be a JavaScript file"
}
```
* Create a config adapter to support vscode-settings 