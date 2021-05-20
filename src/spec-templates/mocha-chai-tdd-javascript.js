const content = (name, relativePath) => {
    return `\
const ${name} = require('${relativePath}${name}')
const assert = require('chai').assert

suite('${name}', () => {
    test('', () => {

    })
})
`
}

exports.content = content;