const content = (name, relativePath) => {
    return `\
import * as ${name} from '${relativePath}${name}'
import { expect } from "chai"

describe('${name}', () => {
    it('', () => {

    })
})
`
}

exports.content = content;