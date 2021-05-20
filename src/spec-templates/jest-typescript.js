const content = (name, relativePath) => {
    return `\
import * as ${name} from '${relativePath}${name}'

describe('${name}', () => {
    test('', () => {

    })
})
`
}

exports.content = content;