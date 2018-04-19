import React from 'react';
import Link from 'gatsby-link';

export default ({data}) => (
  <div>
    <h1>Blog Index</h1>
    {
      data.allMarkdownRemark.edges.map( ({node}) => 
        <div key={node.id} >
          <Link to={`/${node.fields.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <h6>{node.frontmatter.date}</h6>
          <p>{node.excerpt}</p>
        </div>
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
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug 
          }
          excerpt
        }
      }
    }
  }
`;