/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const slug = createFilePath({ 
      node, 
      getNode, 
      basePath: 'src/blog', 
      trailingSlash: false
    });
    createNodeField({
      node, 
      name: 'slug',
      value: `blog${slug}`
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  
  return new Promise( (resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: {
            order: DESC,
            fields: [frontmatter___date]
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          }
        })
      })
      resolve();
    });
  }) 
};