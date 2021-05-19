const specService = require('./spec')
const fileFacade = require('./file')

const facade = providers => {

    const create = document => {
        const parsedDocument = providers
            .documentParser
            .parse(document);
        const sourceLocation = providers.path.resolve(
            providers.config.testFolder,
            parsedDocument.path
            )
        const spec = specService
            .service(providers.spec)
            .create(
                parsedDocument.name, 
                sourceLocation);
        const file = buildFileFrom(
            fileName(spec, providers.config.ext), 
            spec, 
            providers.config.testFolder
        );
        fileFacade.service(providers.store).save(file);
        providers.view.show(file.path + file.name);
    }

    const fileName = (spec, ext) => {
        return spec.name + ext;
    }

    const buildFileFrom = (fileName, spec, path) => {
        return {
            name: fileName,
            content: spec.content,
            path: path + "/"
        };
    }

    return {
        create: create
    }
}

exports.facade = facade


