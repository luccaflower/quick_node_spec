const file = require('./file');
const chaiSpec = require('./chaiSpec');
const uri = require('./uriParser');
const view = require('./view');
    

function createSpec(document) {
    console.log("creating spec");
    const parsedDocument = uri.parse(document);
    const spec = chaiSpec.spec(parsedDocument.name)
    const specFile = buildFileFrom(parsedDocument, spec)
    file.save(specFile)
    view.show(specFile.path)
};

function buildFileFrom(document, content) {
    const specExt = '.spec.js'
    return {
        path: document.directory + document.name + specExt,
        content: content
    }
}


exports.createSpec = createSpec

