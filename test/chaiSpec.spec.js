const chaiSpec = require('../src/chaiSpec')
const expect = require('chai').expect

describe('chaiSpec', () => {
    it('creates spec with name', () => {
        const spec = chaiSpec.spec("test")
        expect(spec).to.contain('const test = require(\'./test\')')
        expect(spec).to.contain('describe(\'test\', () => {')
    })
})
