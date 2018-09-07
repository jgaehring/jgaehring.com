import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import PostPreview from '../components/PostPreview';

export default ({data}) => (
  <div>
    <Header />
    <h1>Blog Index</h1>
    {
      data.allMarkdownRemark.edges.map( ({node}, index) => 
        <PostPreview 
          key={`post-${index}`} 
          frontmatter={node.frontmatter} 
          excerpt={node.excerpt} 
          fields={node.fields} 
        />
      )
    }
  </div>
);

export const query = graphql`
  query BlogIndex {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC } ) {
      totalCount
      edges {
        node {
          ...PostPreviewFragment
        }
      }
    }
  }
`;