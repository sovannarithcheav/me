// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-markdown-page-templates-index-page-index-tsx": () => import("./../src/markdownPageTemplates/IndexPage/index.tsx" /* webpackChunkName: "component---src-markdown-page-templates-index-page-index-tsx" */),
  "component---src-markdown-page-templates-template-basic-index-tsx": () => import("./../src/markdownPageTemplates/TemplateBasic/index.tsx" /* webpackChunkName: "component---src-markdown-page-templates-template-basic-index-tsx" */),
  "component---src-pages-404-tsx": () => import("./../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-projects-index-tsx": () => import("./../src/pages/projects/index.tsx" /* webpackChunkName: "component---src-pages-projects-index-tsx" */)
}

