const file = require('../src/file')
const expect = require('chai').expect

describe('file', () => {
    it('cannot save files with no name', () => {
        expect(() => file.service(storeMock()).save({
            path: "/",
            content: "",
        })).to.throw("File must have a name")
    })
    it('cannot save files with no path', () => {
        expect(() => file.service(storeMock()).save({
            name: "name",
            content: ""
        })).to.throw("File must be saved to a path")
    
    })
    it('may save files with no content', () => {
        const savedFile = {
            name: "name",
            path: "/"
        }
        file.service(storeMock()).save(savedFile)
        expect(storeMockDict[savedFile.name].content).to.be.empty
    })
    it('will save a file to a path', () => {
        const savedFile = {
            name: "name",
            path: "/",
            content: ""
        }
        file.service(storeMock()).save(savedFile)
        expect(storeMockDict[savedFile.name].path).to.equal("/")
    })

    it('will write content to a file', () => {
        const savedFile = {
            name: "name",
            path: "/",
            content: "content"
        }
        file.service(storeMock()).save(savedFile)
        expect(storeMockDict[savedFile.name].content).to.equal("content")
    })

    after(() => {
        storeMockDict = {}
    })
})

let storeMockDict = {}

const storeMock = () => {
    const createFile = file => {
        storeMockDict[file.name] = {
            path: file.path,
            content: file.content
        }
    }
    return {
        createFile: createFile
    }
}

