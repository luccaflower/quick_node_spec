const service = store => {
    const save = fileData => {
        store.createFile(fileData)
    }
    return {
        save: save
    }
}

exports.service = service