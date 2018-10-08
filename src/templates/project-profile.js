import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from './project-profile.module.css';
import { FaGithub, FaCircle } from 'react-icons/lib/fa';

export default function ProjectProfile({ data }) {
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
      <div className={styles.preview}>
        <img
          alt={`Screenshot of ${post.frontmatter.title}`}
          src={post.frontmatter.cover.publicURL}
        />
        <div className={styles.details}>
          <div  className={styles.title}>
            <h2>{post.frontmatter.title}</h2>
          </div>
          <div className={styles.links}>
            <a href={post.frontmatter.github}>
              <FaGithub className={styles.gh}/>
            </a>
            <a href={post.frontmatter.link}>
              Live
              &nbsp;
              <FaCircle className={styles.circle}/>
            </a>
          </div>
          <div className={styles.description}>
            <p><i>{post.frontmatter.description}</i></p>
          </div>
          <div className={styles.tech}>
            <h4>Technologies used:</h4>
            <ul>
              {
                post.frontmatter.stack.map((tech, i) => <li key={i}>{tech}</li>)
              }
            </ul>
          </div>
        </div>

      </div>
      <div className={styles.post}>
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
        github
        link
        description
        stack
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
