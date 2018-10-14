/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    node.collection = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'src/blog',
      trailingSlash: false
    });
    createNodeField({
      node,
      name: 'slug',
      value: `${node.collection}${slug}`
    });
    createNodeField({
      node,
      name: 'collection',
      value: `${node.collection}`
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

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
              collection
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
        const template = (node.collection === 'projects')
        ? path.resolve(`src/templates/project-profile.js`)
        : path.resolve(`src/templates/blog-post.js`)

        createPage({
          path: node.fields.slug,
          component: template,
          context: {
            slug: node.fields.slug,
          }
        })
      })
      resolve();
    });
  })
};
