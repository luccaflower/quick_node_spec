const chaiSpec = require('../src/chaiSpec')
const expect = require('chai').expect

describe('chaiSpec', () => {
    it('creates spec with name and imports from path', () => {
        const spec = chaiSpec.content("test", "./")
        expect(spec).to.contain('const test = require(\'./test\')')
        expect(spec).to.contain('describe(\'test\', () => {')
    })
})
