exports.onInitialClientRender = (n, config) => {
  window.mermaid_config = { theme: config.theme || 'default', startOnLoad: true }
  // load initial script
  const s = document.createElement('script')
  s.setAttribute('src', 'https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js')
  document.head.appendChild(s)
  // XXX: ugly hack because onRouteUpdate doesn't know when the react is done
  setInterval(() => {
    window.mermaid.init(undefined, document.getElementsByClassName('mermaid'))
  }, 200)
}
