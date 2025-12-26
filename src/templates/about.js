import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';

export { Head } from '../components/Layout';

const About = ({ data, location }) => {
  console.log(data)
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Header pathname={location.pathname}/>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        siteUrl
        description
        keywords
        title
      }
    }
    markdownRemark(frontmatter: {path: {eq: "/about"}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
      fields {
        slug
      }
    }
  }
`;

export default About;
