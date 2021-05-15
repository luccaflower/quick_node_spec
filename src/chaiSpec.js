function spec(name) {
    return specFrom(name)
}


function specFrom(name) {
    return `\
const ${name} = require('./${name}')
const expect = require('chai').expect

describe('${name}', () => {
    it('', () => {

    })
})
`
}

exports.spec = spec;