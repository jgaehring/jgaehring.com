import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';
import Header from '../components/Header';

export default ({ data }) => (
  <Layout>
    <Header/>
    <h1>Projects</h1>
    <p>
      Tamen iis do velit ingeniis. Cupidatat illum nescius, qui quamquam praesentibus. 
      Eu nisi enim aliqua possumus, anim ubi senserit an labore.Ex dolor mandaremus 
      excepteur. Qui export incididunt adipisicing est se anim reprehenderit. Quid 
      ingeniis ex illum illum et senserit fore ea cernantur cohaerescant se aliquip eu 
      iudicem ea enim arbitror instituendarum, est quae quem eram nescius, iis 
      deserunt exercitation, ubi quid veniam labore nescius ita noster cernantur ita 
      illum dolor.
    </p>
    {
      data.allMarkdownRemark.edges
      .map(({ node: { frontmatter, fields: { slug }} }, i) => (
        <div className='project' key={`project-${i}`}>
          <Link to={`/${slug}`}>
            <h3>{frontmatter.title}</h3>
          </Link>
          <Link to={`/${slug}`}>
            <img 
              src={frontmatter.cover.publicURL}
              alt={`Screenshot of ${frontmatter.title}`}
            />
          </Link>
          <p>{frontmatter.description}</p>
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
            thumb
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