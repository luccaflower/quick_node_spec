const path = require('../src/path')
const expect = require('chai').expect

describe('path', () => {
    it('provides a relative path from source to destination', () => {
        const result = path.resolve("./test/", "./src/")
        expect(result).to.equal("../src/")
    })
})
