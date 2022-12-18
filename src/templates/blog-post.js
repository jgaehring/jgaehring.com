import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from './blog-post.module.css';
import logo from '../assets/golden-russet-black.jpg';

export default function BlogTemplate({ data, location }) {
  const {
    markdownRemark: {
      excerpt,
      fields: { slug },
      frontmatter: { title, date },
      html
    },
  } = data;
  const rootUrl = 'https://jgaehring.com';
  const url = rootUrl + '/' + slug;
  const image = rootUrl + logo;
  return (
    <Layout>
      <div className={styles.post}>
        <Helmet
          title={`${title} | Jamie Gaehring`}
          meta={[
            { name: 'description', content: excerpt },
            { name: 'image', content: image },
            { property: 'og:url', content: url },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: excerpt },
            { property: 'og:image', content: image },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '675' },
            { property: 'og:image:type', content: 'image/jpeg' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:creator', content: '@JamieGaehring' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: excerpt },
            { name: 'twitter:image', content: image },
          ]}
          link={[{ rel: 'canonical', href: url }]}
        >
        </Helmet>
        <Header pathname={location.pathname}/>
        <h1 className={styles.title}>{title}</h1>
        <h5>by Jamie Gaehring | {date}</h5>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
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
      fields {
        slug
      }
      excerpt
    }
  }
`;
