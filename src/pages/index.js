import React, { useRef } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from './index.module.css';
import PostPreview from '../components/PostPreview';
import logo from '../assets/golden-russet-black.svg';
import portrait from '../assets/portrait_2020.jpg';
import { FaGithub, FaTwitter } from 'react-icons/lib/fa';

const IndexPage = ({data}) => {
  const moreRef = useRef(null);
  const scrollToMore = () => window.scrollTo({
    left: 0,
    top: moreRef.current.offsetTop - 100,
    behavior: 'smooth',
  });

  return (
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
            <p>
              For over two decades, I've been helping farmers build a more open
              food system. Today, I'm working to give those farmers better access
              to the software, data and other tools that they need to feed their
              communities in the 21<sup>st</sup> century.&nbsp;
              <a id={styles.moreLink} onClick={scrollToMore} href="#more">More.</a>
            </p>
          </div>
        </section>
        <section>
          <div className={styles.contact}>
            <p id="more" ref={moreRef}><Link to="/about">About me.</Link></p>
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
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePagePreviews {
    allMarkdownRemark( sort: { fields: [frontmatter___rank, frontmatter___date], order: ASC } ) {
      totalCount
      edges {
        node {
          ...PreviewFragment
        }
      }
    }
  }
`;

export const fragment = graphql`
  fragment PreviewFragment on MarkdownRemark {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      thumb {
        publicURL
      }
      description
    }
    fields {
      slug
    }
    excerpt
    collection
  }
`;