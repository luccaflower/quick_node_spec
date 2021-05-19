const file = require('../src/file')
let inMemoryStore = {}
const storeMock = require('./store-mock')
const expect = require('chai').expect

describe('file', () => {
    it('cannot save files with no name', () => {
        expect(() => file.service(storeMock.store(inMemoryStore)).save({
            path: "/",
            content: "",
        })).to.throw("File must have a name")
    })
    it('cannot save files with no path', () => {
        expect(() => file.service(storeMock.store(inMemoryStore)).save({
            name: "name",
            content: ""
        })).to.throw("File must be saved to a path")
    
    })
    it('may save files with no content', () => {
        const savedFile = {
            name: "name",
            path: "/"
        }
        file.service(storeMock.store(inMemoryStore)).save(savedFile)
        expect(inMemoryStore[savedFile.name].content).to.be.empty
    })
    it('will save a file to a path', () => {
        const savedFile = {
            name: "name",
            path: "/",
            content: ""
        }
        file.service(storeMock.store(inMemoryStore)).save(savedFile)
        expect(inMemoryStore[savedFile.name].path).to.equal("/")
    })

    it('will write content to a file', () => {
        const savedFile = {
            name: "name",
            path: "/",
            content: "content"
        }
        file.service(storeMock.store(inMemoryStore)).save(savedFile)
        expect(inMemoryStore[savedFile.name].content)
            .to.equal("content")
    })

    afterEach(() => {
        inMemoryStore = {}
    })
})



