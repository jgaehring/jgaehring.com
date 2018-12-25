import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from './index.module.css';
import PostPreview from '../components/PostPreview';
import ProjectPreviews from '../components/ProjectPreviews';
import logo from '../assets/golden-russet-black.svg';
import portrait from '../assets/portrait.jpg';
import { FaGithub, FaTwitter } from 'react-icons/lib/fa';

// TODO: Optimize images via https://www.gatsbyjs.org/packages/gatsby-image/
const IndexPage = ({data}) => (
  <Layout>
    <div className={styles.home}>
      <section className={styles.about}>
        <div className={styles.logo} >
          <img src={logo} alt="jgaehring.com logo"/>
          &mdash; &bull;&bull;&bull; &mdash;
        </div>
        <div className={styles.portrait}>
          <img src={portrait} alt="Jamie"/>
        </div>
        <div className={styles.blurb} >
          <p>For nearly two decades, I've been helping farmers build a more open food system. Today, I'm working to give those farmers better access to the software, data and other tools that they need to feed their communities in the 21<sup>st</sup> century.</p>
        </div>
      </section>
      <section>
        <div className={styles.contact}>
          <h3>
            &#123;{/*Use HTML code for curly braces b/c of jsx*/}
            <a href="mailto:jamie@jgaehring.com"
              target='_blank'
              rel="noopener noreferrer"
            >
              jamie@jgaehring.com
            </a>
            &#125;
          </h3>
          <h2>
            <a href="https://github.com/jgaehring"
              target='_blank'
              rel="noopener noreferrer"
            >
              <FaGithub/>
            </a>
            &nbsp;
            <a href="https://twitter.com/JamieGaehring"
              target='_blank'
              rel="noopener noreferrer"
            >
              <FaTwitter/>
            </a>
          </h2>
        </div>
      </section>
      <section className={styles.blog}>
        <header>
          <h2>Writings</h2>
          <p>
            A few ideas about ag & tech.
            <br/>
            <Link to='/blog'>Go to blog.</Link>
          </p>
        </header>
        {
          data.allMarkdownRemark.edges
          .filter(({ node }) => node.collection === 'blog')
          .map( ({ node }, index) =>
            <PostPreview
              key={`post-${index}`}
              frontmatter={node.frontmatter}
              excerpt={node.excerpt}
              fields={node.fields}
            />
          )
        }
      </section>
      <section className={styles.projects}>
        <header>
          <h2>Projects</h2>
          <p>
            Here are some things I've made.
            <br/>
            <Link to='/projects'>Go to projects.</Link>
          </p>
        </header>
        <ProjectPreviews data={data} />
      </section>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query BlogList {
    allMarkdownRemark( sort: {fields: [frontmatter___date], order: DESC } ) {
      totalCount
      edges {
        node {
          ...PostPreviewFragment
        }
      }
    }
  }
`;
