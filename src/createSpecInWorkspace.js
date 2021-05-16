const specService = require('./spec')
const fileFacade = require('./file')

function facade(providers) {

    const create = document => {
        const parsedDocument = providers
            .documentParser
            .service(providers.config.path)
            .parse(document);
        const spec = specService
            .service(providers.spec)
            .create(parsedDocument.name, providers.config.path);
        const dataStore = fileFacade.service(providers.store);
        const file = {
            name: fileName(spec, providers.config.ext),
            content: spec.content,
            path: parsedDocument.path
        };
        dataStore.save(file);
        providers.view.show(file.path + file.name);
    }
    return {
        create: create
    }
}

exports.facade = facade

function fileName(spec, ext) {
    return spec.name + ext;
}