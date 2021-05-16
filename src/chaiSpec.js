const content = (name, relativePath) => {
    return `\
const ${name} = require('${relativePath}${name}')
const expect = require('chai').expect

describe('${name}', () => {
    it('', () => {

    })
})
`
}

exports.content = content;