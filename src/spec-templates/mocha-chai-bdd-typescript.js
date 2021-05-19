const content = (name, relativePath) => {
    return `\
import ${name} from '${relativePath}${name}'
import { expect } from "chai"

describe('${name}', () => {
    it('', () => {

    })
})
`
}

exports.content = content;