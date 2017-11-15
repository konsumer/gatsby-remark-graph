exports.onInitialClientRender = () => {
  // load initial script
  const s = document.createElement('script')
  s.setAttribute('src', 'https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js')
  document.head.appendChild(s)
}

exports.onRouteUpdate = function ({ location }) {
  // refresh on nextTick
  setTimeout(() => {
    if (window.mermaid) {
      window.mermaid.init(undefined, document.getElementsByClassName('mermaid'))
    }
  }, 0)
}
