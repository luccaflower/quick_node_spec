
function service(spec) {
    const create = (name, relativePath) => {
        console.log("creating spec with: " + name);
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

