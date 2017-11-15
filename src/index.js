const visit = require('unist-util-visit')

module.exports = ({ markdownAST }, { language = 'mermaid' } = {}) => {
  visit(markdownAST, 'code', node => {
    let language = (node.lang || '').toLowerCase()
    if (node.lang === language){
      node.type = 'html'
      node.value = `<script src="https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"></script><div class="mermaid">${node.value}</div>`
    }
  }
}