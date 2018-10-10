import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from './projects.module.css';

export default ({ data }) => (
  <Layout>
    <Header/>
    <h1>Projects</h1>
    {
      data.allMarkdownRemark.edges
      .map(({ node: { frontmatter, fields: { slug }} }, i) => (
        <div className={styles.project} key={`project-${i}`}>
          <Link to={`/${slug}`}>
            <img 
              src={frontmatter.thumb.publicURL}
              alt={`Screenshot of ${frontmatter.title}`}
            />
          </Link>
          <Link to={`/${slug}`}>
            <h3>{frontmatter.title}</h3>
          </Link>
          <p><i>{frontmatter.description}</i></p>
        </div>
      ))
    }
  </Layout>
)

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark( 
      filter: { collection: { eq: "projects" } }
      sort: { fields: [frontmatter___date], order: DESC } 
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            cover {
              publicURL
            }
            thumb {
              publicURL
            }
            github
            link
            description
            stack
          }
          fields {
            slug 
          }
          excerpt
          collection
        }
      }
    }
  }
`;