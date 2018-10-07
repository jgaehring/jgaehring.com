import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from './project-profile.module.css';

export default function BlogTemplate({ data }) {
  const { markdownRemark: post } = data;
  const rootUrl = 'https://jgaehring.com/'
  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} | Jamie Gaehring`}
        meta={[
          { name: 'description', content: post.excerpt },
        ]}
        link={[
          { rel: 'canonical', href: rootUrl + data.markdownRemark.fields.slug }
        ]}
      >
      </Helmet>
      <Header/>
      <div className={styles.screenshot}>
        <img
          alt='Screenshot of the Harvest Calendar Generator' 
          src={post.frontmatter.cover.publicURL}
        />
      </div>
      <div className={styles.post}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectProfile($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover {
          publicURL
        }
        thumb
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
