import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { post } from './blog-post.module.css';

export { Head } from '../components/Layout';

export default function BlogTemplate({ data, location }) {
  const {
    markdownRemark: {
      frontmatter: { title, date },
      html
    },
  } = data;
  return (
    <Layout>
      <div>
        <Header pathname={location.pathname}/>
        <div className={post}>
          <h1>{title}</h1>
          <h5>by Jamie Gaehring | {date}</h5>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        description
        keywords
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
