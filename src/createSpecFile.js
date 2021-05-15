const file = require('./fsAdapter');

function createSpec(path, name) {
    const specFile = path + specFileName(name)
    const data = chaiTemplate(name)
    console.log(`spec file name: ${specFile}`);
    file.createFile(specFile, data)
    return specFile
}

function specFileName(name) {
    return name + '.spec.js'
}

function chaiTemplate(name) {
    return `\
const ${name} = require('./${name}')
const expect = require('chai').expect

describe('${name}', () => {
    it('', () => {

    })
})
`
}

exports.createSpec = createSpec;