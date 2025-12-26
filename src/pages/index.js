import React, { useRef } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout, { description } from '../components/Layout';
import {
  about, aboutContainer, blurb, blog, bulletDivider, centerText, contact,
  logo as styleLogo, moreLink, portrait as stylePortrait,
} from './index.module.css';
import PostPreview from '../components/PostPreview';
import logo from '../assets/golden-russet-black.svg';
import portrait from '../assets/woodward_crop_1971x2956.jpg';
import { FaGithub, FaMastodon } from 'react-icons/fa';

const descriptionHtml = description.replaceAll(/21st/g, '21<sup>st</sup>');

const IndexPage = ({data}) => {
  const moreRef = useRef(null);
  const scrollToMore = e => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: moreRef.current.offsetTop - 100,
      behavior: 'smooth',
    });
  };

  return (
    <Layout description={description}>
      <div>
        <section className={aboutContainer}>
          <div className={about}>
            <div className={styleLogo}>
              <img src={logo} alt="jgaehring.com logo"/>
            </div>
            <div className={stylePortrait}>
              <img src={portrait} alt="Portrait of Jamie Gaehring"/>
            </div>
            <div className={blurb} >
              <p className={bulletDivider}>&mdash; &bull;&sect;&bull; &mdash;</p>
              <p>
                <span dangerouslySetInnerHTML={{ __html: descriptionHtml }}/>&nbsp;
                <a id={moreLink} onClick={scrollToMore} href="#more">&#x21d3;</a>
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className={contact}>
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
              <a href="https://social.coop/@jgaehring"
                target='_blank'
                rel="noopener noreferrer"
              >
                <FaMastodon/>
              </a>
            </h2>
          </div>
        </section>
        <section className={blog}>
          <header>
            <h2>Writings</h2>
            <p>
              A few ideas about ag & tech.
            </p>
          </header>
          {
            data.allMarkdownRemark.edges.map(({ node }, index) =>
              <PostPreview
                key={`post-${index}`}
                frontmatter={node.frontmatter}
                excerpt={node.excerpt}
                fields={node.fields}
              />)
          }
          <div className={centerText}>
            <p><Link to='/blog'>More posts.</Link></p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePagePreviews {
    allMarkdownRemark(
      filter: {
        fields: {
          collection: { eq: "blog" }
        }
      },
      sort: {
        fields: [frontmatter___date],
        order: DESC,
      },
      limit: 3
    ) {
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