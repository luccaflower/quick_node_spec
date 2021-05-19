const mochaChaiBddJavaScript = require('./mocha-chai-bdd-javascript')
const mochaChaiBddTypeScript = require('./mocha-chai-bdd-typescript')

exports.templates = {
    ".js" : {
        "mocha-chai-bdd":  mochaChaiBddJavaScript
    },
    ".ts" : {
        "mocha-chai-bdd": mochaChaiBddTypeScript
    }
}