const visit = require('unist-util-visit')

module.exports = ({ markdownAST }, { language = 'mermaid', theme: 'default' } = {}) => {
  visit(markdownAST, 'code', node => {
    let lang = (node.lang || '').toLowerCase()
    if (lang === language) {
      if (window){
        window.mermaid_config = { theme }
      }
      node.type = 'html'
      node.value = `<div class="mermaid">${node.value}</div>`
    }
  })
}
