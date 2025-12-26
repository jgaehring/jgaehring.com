import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import favicon from '../../assets/favicon.ico';
import logo from '../../assets/golden-russet-black.jpg';

// TODO: Export a GraphQL fragment here, too, to cover the necessary site data.
export function Head ({ location, params, data, pageContext }) {
  const {
    site: { siteMetadata: site = {} },
    markdownRemark: { excerpt, frontmatter} = {},
  } = data;
  const title = frontmatter?.title ?? site.title;
  const description = frontmatter?.description ?? excerpt ?? site.desription;
  const url = `${site.siteUrl}${location.pathname}`;
  const image = `${site.siteUrl}${logo}`;
  return <>
    <title>{title}</title>
    <link rel="canonical" href={url} />
    <link rel='shortcut icon' href={favicon} />
    <meta name="description" content={description} />
    <meta name="keywords" content={site.keywords} />
    <meta name="image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content={1200} />
    <meta property="og:image:height" content={675} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@JamieGaehring" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </>
}

const Layout = ({ children, location }) => (
  <div id='site-container'>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

export default Layout
