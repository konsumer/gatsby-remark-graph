const visit = require('unist-util-visit')

module.exports = ({ markdownAST }, { language = 'mermaid' } = {}) => {
  visit(markdownAST, 'code', node => {
    let language = (node.lang || '').toLowerCase()
    if (node.lang === language) {
      node.type = 'html'
      node.value = `<div class="mermaid">${node.value}</div>`
    }
  })
}
