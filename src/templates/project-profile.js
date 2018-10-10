import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from './project-profile.module.css';
import { FaGithub } from 'react-icons/lib/fa';
import MDOpenInNew from 'react-icons/lib/md/open-in-new';

export default function ProjectProfile({ data }) {
  const { markdownRemark: post } = data;
  const rootUrl = 'https://jgaehring.com/'

  const ghLink = (
    <a 
      href={post.frontmatter.github}
      target='_blank'
      rel="noopener noreferrer"
    >
      <FaGithub className={styles.gh}/>
    </a>
  )
  
  const siteLink = (
    <a 
      href={post.frontmatter.link}
      target='_blank'
      rel="noopener noreferrer"
    >
      View&nbsp;<MDOpenInNew/>
    </a>
  )

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
        <a
          href={post.frontmatter.cover.publicURL}
          target='_blank'
          rel="noopener noreferrer"
        >
          <img
            alt={`Screenshot of ${post.frontmatter.title}`}
            src={post.frontmatter.cover.publicURL}
          />
        </a>
        <div className={styles.details}>
          <div  className={styles.title}>
            <h1>{post.frontmatter.title}</h1>
          </div>
          <div className={styles.links}>
            {
              (post.frontmatter.link)
                ? siteLink
                : null
            }
            {
              (post.frontmatter.github)
                ? ghLink
                : null
            }
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
