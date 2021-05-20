const content = (name, relativePath) => {
    return `\
import * as ${name} from '${relativePath}${name}'
import { assert } from 'chai'

suite('${name}', () => {
    test('', () => {

    })
})
`
}

exports.content = content;