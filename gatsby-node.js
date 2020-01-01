const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulPost.edges.forEach(edge => {
    const slug = edge.node.slug
    /**
     * @param {String} - component - absolute path to template
     * @param {String} - (output) path - uses slug created
     * @param {Object} - context - gives context with slug name
     */
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}
