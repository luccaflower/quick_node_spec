const specService = require('./spec')
const fileFacade = require('./file')

const facade = providers => {

    const create = document => {
        const parsedDocument = providers
            .documentParser
            .service(
                providers.config.relativePath + providers.config.testFolder)
            .parse(document);
        const spec = specService
            .service(providers.spec)
            .create(
                parsedDocument.name, 
                providers.config.relativePath + providers.config.sourceFolder);
        const dataStore = fileFacade.service(providers.store);
        const file = {
            name: fileName(spec, providers.config.ext),
            content: spec.content,
            path: parsedDocument.path
        };
        dataStore.save(file);
        providers.view.show(file.path + file.name);
    }

    const fileName = (spec, ext) => {
        return spec.name + ext;
    }

    return {
        create: create
    }
}

exports.facade = facade
