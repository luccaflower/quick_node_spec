const content = (name, relativePath) => {
    return `\
const ${name} = require('${relativePath}${name}')

describe('${name}', () => {
    test('', () => {

    })
})
`
}

exports.content = content;