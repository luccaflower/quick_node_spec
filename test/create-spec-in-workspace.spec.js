const createSpecInWorkspace = require('../src/create-spec-in-workspace')
let inMemoryStore = {}
const storeMock = require('./store-mock')
const pathResolver = require('../src/path')
const expect = require('chai').expect

const path = "./"
const name = "test"
const ext = ".js"
const specExt = ".spec.js"

describe('create-spec-in-workspace', () => {
    it('creates a file from a document', () => {
        createSpecInWorkspace.facade(providersMock())
            .create(path + name + ext)
        expect(inMemoryStore[name + specExt]).to.exist
        expect(inMemoryStore[name + specExt].content).to.contain(name)
    })

    afterEach(() => {
        inMemoryStore = {} 
    })
})

const providersMock = () => {
    const specMock = () => {
        const content = (name, relativePath) => {
            return `spec for ${name} at ${relativePath}`
        }
        return {
            content: content
        }
    }
    
    const parserMock = () => {
        // eslint-disable-next-line no-unused-vars
        const parse = _ => {
            return {
                path: path,
                name: name,
                ext: ext
            }
        }
        return {
            parse: parse
        }
    }

    const configMock = () => {
        return {
            ext: ".spec.js",
            testFolder: path
        }
    }

    const viewMock = () => {
        // eslint-disable-next-line no-unused-vars
        const show = _ => {}
        return {
            show: show
        }
    }

    return {
        spec: specMock(),
        documentParser: parserMock(),
        config: configMock(),
        path: pathResolver,
        store: storeMock.store(inMemoryStore),
        view: viewMock()
    }
}