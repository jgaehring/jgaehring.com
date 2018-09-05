import React from 'react';
import Helmet from 'react-helmet'
import Header from '../components/Header';
import styles from './blog-post.module.css';

export default function BlogTemplate({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet
        title="Jamie Gaehring"
        meta={[
          { name: 'description', content: post.excerpt },
        ]}
      >
      </Helmet>
      <Header/>
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      excerpt
    }
  }
`;
