
function service(spec) {
    const create = (name, relativePath) => {
        return {
            name: name,
            content: spec.content(name, relativePath)
        }
    }
    return {
        create: create
    }
};

exports.service = service

