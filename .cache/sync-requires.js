const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-markdown-page-templates-index-page-index-tsx": hot(preferDefault(require("/Users/cheavsovannarith/Documents/personal/projects/sovannarithcheav.github.io/src/markdownPageTemplates/IndexPage/index.tsx"))),
  "component---src-markdown-page-templates-template-basic-index-tsx": hot(preferDefault(require("/Users/cheavsovannarith/Documents/personal/projects/sovannarithcheav.github.io/src/markdownPageTemplates/TemplateBasic/index.tsx"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/cheavsovannarith/Documents/personal/projects/sovannarithcheav.github.io/src/pages/404.tsx"))),
  "component---src-pages-projects-index-tsx": hot(preferDefault(require("/Users/cheavsovannarith/Documents/personal/projects/sovannarithcheav.github.io/src/pages/projects/index.tsx")))
}

