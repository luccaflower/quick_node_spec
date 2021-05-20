const mochaChaiBddJavaScript = require('./mocha-chai-bdd-javascript')
const mochaChaiTddJavaScript = require('./mocha-chai-tdd-javascript')
const jestJavascript = require('./jest-javascript')

const mochaChaiBddTypeScript = require('./mocha-chai-bdd-typescript')
const mochaChaiTddTypeScript = require('./mocha-chai-tdd-typescript')
const jestTypescript = require('./jest-typescript')

exports.templates = {
    ".js" : {
        "mocha-chai-bdd": mochaChaiBddJavaScript,
        "mocha-chai-tdd": mochaChaiTddJavaScript,
        "jest"          : jestJavascript
    },
    ".ts" : {
        "mocha-chai-bdd": mochaChaiBddTypeScript,
        "mocha-chai-tdd": mochaChaiTddTypeScript,
        "jest"          : jestTypescript
    }
}