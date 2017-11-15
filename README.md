# gatsby-remark-graph

Make nice graphs in your markdown files in gatsbyjs, using [mermaid](https://mermaidjs.github.io/).

## install

'npm install --save gatsby-transformer-remark gatsby-remark-graph'


## How to use

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-graph',
          options: {
            // this is the language in your code-block that triggers mermaid parsing
            language: 'graph' // default
          }
        }
      ]
    }
  }
]
```

### Usage in Markdown

    ```graph
    graph LR
        A[Square Rect] -- Link text --> B((Circle))
        A --> C(Round Rect)
        B --> D{Rhombus}
        C --> D
    ```