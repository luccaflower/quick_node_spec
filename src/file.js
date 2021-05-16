function service(store) {
    const save = fileData => {
        store.createFile({
            path: fileData.path,
            name: fileData.name,
            content: fileData.content
        })
    }
    return {
        save: save
    }
}

exports.service = service