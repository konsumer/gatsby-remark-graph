exports.onInitialClientRender = function (n, config) {
  window.mermaid_config = { theme: config.theme || 'default', startOnLoad: true }

  // load initial script
  const s = document.createElement('script')
  s.setAttribute('src', 'https://unpkg.com/mermaid@10.2.3/dist/mermaid.min.js')
  document.head.appendChild(s)

  // XXX: ugly hack because onRouteUpdate doesn't know when the react is done
  const init = () => {
    if (window.mermaid) window.mermaid.init(undefined, document.getElementsByClassName('mermaid'))
    else setInterval(init, 200)
  }
  init()
}
