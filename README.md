# gatsby-remark-graph

Make nice graphs in your markdown files in gatsbyjs, using [mermaid](https://mermaidjs.github.io/).

## install

`npm install --save gatsby-transformer-remark gatsby-remark-graph`


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
            language: 'mermaid' // default
          }
        }
      ]
    }
  }
]
```

Now you need to add a script tag. I like to do this with [Helmet](https://github.com/nfl/react-helmet) in `src/layouts/index.js`:

```js
import Helmet from 'react-helmet'

// ... later in layout component:
<Helmet>
  <title>Home | {data.site.siteMetadata.title}</title>
  <script src='https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js' />
</Helmet>
```

Make sure you put it before other plugins (especially those that work with `code` blocks, like [prism](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/).)

### Usage in Markdown

    ```graph
    graph LR
        A[Square Rect] -- Link text --> B((Circle))
        A --> C(Round Rect)
        B --> D{Rhombus}
        C --> D
    ```

Will give you a graph that looks like this:

![diagram](graph.png)

### styling

My blog is dark, so I used a white background to make graphs stand out:

```css
.mermaid > svg {
  background: #fff;
  width: auto;
}
```
