const fs = require('fs')
const path = require('path')

const indexPath = path.resolve(__dirname, '..', 'dist', 'index.js')
const indexContent = fs.readFileSync(indexPath, 'utf8')

const newIndexContent = indexContent.replace('__r(0);', 'module.exports = __r(0);')

fs.writeFileSync(indexPath, newIndexContent)