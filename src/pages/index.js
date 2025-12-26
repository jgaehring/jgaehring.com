import React, { useRef } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import {
  about, aboutContainer, blurb, blog, bulletDivider, centerText, contact,
  logo as styleLogo, moreLink, portrait as stylePortrait, svgIcon,
} from './index.module.css';
import PostPreview from '../components/PostPreview';
import logo from '../assets/golden-russet-black.svg';
import portrait from '../assets/woodward_crop_1971x2956.jpg';
import { FaGithub, FaMastodon } from 'react-icons/fa';

export { Head } from '../components/Layout';

const IconBsky = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="2 2 20 20"
    width="24"
    height="24"
    className={svgIcon}
  >
    <path
      d="M6.335 4.212c2.293 1.76 4.76 5.327 5.665 7.241.906-1.914 3.372-5.482 5.665-7.241C19.319 2.942 22 1.96 22 5.086c0 .624-.35 5.244-.556 5.994-.713 2.608-3.315 3.273-5.629 2.87 4.045.704 5.074 3.035 2.852 5.366-4.22 4.426-6.066-1.111-6.54-2.53-.086-.26-.126-.382-.127-.278 0-.104-.041.018-.128.278-.473 1.419-2.318 6.956-6.539 2.53-2.222-2.331-1.193-4.662 2.852-5.366-2.314.403-4.916-.262-5.63-2.87C2.35 10.33 2 5.71 2 5.086c0-3.126 2.68-2.144 4.335-.874Z"
    />
  </svg>
)

const IndexPage = ({data}) => {
  const { site: { siteMetadata: { description } = {} } } = data;
  const descriptionHtml = description.replaceAll(/21st/g, '21<sup>st</sup>');

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
              &nbsp;
              <a href="https://bsky.app/profile/jgaehring.bsky.social"
                target='_blank'
                rel="noopener noreferrer"
              >
                <IconBsky/>
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
    site {
      siteMetadata {
        siteUrl
        description
        keywords
        title
      }
    }
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