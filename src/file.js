const service = store => {
    const save = (file) => {
        if (!file.name) {
            throw new Error("File must have a name")
        }
        if (!file.path) {
            throw new Error("File must be saved to a path")
        }
        if(!file.content) {
            file.content = ""
        }

        store.createFile(file)
    }
    return {
        save: save
    }
}

exports.service = service