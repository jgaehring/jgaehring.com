import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header'

export default ({data}) => (
  <div>
    <Header />
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

/** 
  * TODO: Put the edges (not the sorting) into a GraphQL fragment 
  * and export it with the markup for the each post into a 
  * `PostPreview` component for reuse in the home page and elsewhere. 
  * See: https://www.gatsbyjs.org/docs/querying-with-graphql/#fragments
**/
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