import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import {
  gh, preview, screenshotContainer, details, title, links, description, tech,
  post as postStyle,
} from './project-profile.module.css';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';

export default function ProjectProfile({ data, location }) {
  const { markdownRemark: post } = data;
  const rootUrl = 'https://jgaehring.com/'

  const ghLink = (
    <a
      href={post.frontmatter.github}
      target='_blank'
      rel="noopener noreferrer"
    >
      <FaGithub className={gh}/>
    </a>
  )

  const siteLink = (
    <a
      href={post.frontmatter.link}
      target='_blank'
      rel="noopener noreferrer"
    >
      View&nbsp;<MdOpenInNew/>
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
      <Header pathname={location.pathname}/>
      <div className={preview}>
        <div className={screenshotContainer}>
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
        </div>
        <div className={details}>
          <div  className={title}>
            <h1>{post.frontmatter.title}</h1>
          </div>
          <div className={links}>
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
          <div className={description}>
            <p><i>{post.frontmatter.description}</i></p>
          </div>
          <div className={tech}>
            <h4>Technologies used:</h4>
            <ul>
              {
                post.frontmatter.stack.map((tech, i) => <li key={i}>{tech}</li>)
              }
            </ul>
          </div>
        </div>

      </div>
      <div className={postStyle}>
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
