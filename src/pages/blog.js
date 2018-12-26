import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

export default ({ data, location }) => {
  return (
    <Layout>
      <Header pathname={location.pathname}/>
      <h1>Blog Index</h1>
      {
        data.allMarkdownRemark.edges
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
    allMarkdownRemark(
      filter: { collection: { eq: "blog" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          ...PreviewFragment
        }
      }
    }
  }
`;
