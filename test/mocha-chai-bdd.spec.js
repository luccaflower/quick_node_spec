const chaiSpec = require('../src/spec-templates/mocha-chai-bdd-javascript')
const expect = require('chai').expect

describe('chai-spec', () => {
    it('creates spec with name and imports from path', () => {
        const spec = chaiSpec.content("test", "./")
        expect(spec).to.contain('const test = require(\'./test\')')
        expect(spec).to.contain('describe(\'test\', () => {')
    })
})
