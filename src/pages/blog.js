import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

export default ({ data, location }) => {
  console.log(location);
  // console.log(["*"]);
  return (
    <Layout>
      <Header pathname={location.pathname}/>
      <h1>Blog Index</h1>
      {
        data.allMarkdownRemark.edges
        .filter(({ node }) => node.collection === 'blog')
        .map( ({node}, index) =>
          <PostPreview
            key={`post-${index}`}
            frontmatter={node.frontmatter}
            excerpt={node.excerpt}
            fields={node.fields}
          />
        )
      }
    </Layout>
  )
};

export const query = graphql`
  query BlogIndex {
    allMarkdownRemark( sort: {fields: [frontmatter___date], order: DESC } ) {
      totalCount
      edges {
        node {
          ...PostPreviewFragment
        }
      }
    }
  }
`;
