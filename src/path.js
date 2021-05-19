const pathParser = require('path')

const resolve = (from, to) => {
    return asPOSIX(pathParser.relative(from, to))
}

const asPOSIX = path => {
    return path.split(pathParser.sep).join(pathParser.posix.sep) + '/'
}

exports.resolve = resolve