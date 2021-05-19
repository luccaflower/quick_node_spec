const storeMock = (store) => {
    const createFile = file => {
        store[file.name] = {
            path: file.path,
            content: file.content
        }
    }
    return {
        createFile: createFile,
    }
}

exports.store = storeMock