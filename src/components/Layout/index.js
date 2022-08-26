import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.css';
import favicon from '../../assets/favicon.ico';
import logo from '../../assets/golden-russet-black.jpg';


const description = 'For nearly two decades, I\'ve been helping farmers build a '
  + 'more open food system. Today, I\'m working to give those farmers better '
  + 'access to the software, data and other tools that they need to feed their '
  + 'communities in the 21st century.';
const keywords = 'agriculture, technology, software, data, open source, farming, hudson valley, new york city, new jersey, greenmarket, javascript, web development, local food';
const title = 'Jamie Gaehring';
const baseURL = 'https://jgaehring.com';
const image = baseURL + logo;

const Layout = ({ children, location }) => (
  <div id='site-container'>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'image', content: image },
        { property: 'og:url', content: baseURL + location },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@JamieGaehring' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
      ]}
    >
      <link rel='shortcut icon' href={favicon} />
    </Helmet>
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
