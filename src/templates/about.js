import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';

export default function About ({ data, location }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet
        title="About | Jamie Gaehring">
      </Helmet>
      <Header pathname={location.pathname}/>
      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: {title: {eq: "About"}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      fields {
        slug
      }
    }
  }
`;
