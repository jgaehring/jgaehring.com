import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'
import favicon from '../../assets/favicon.ico'

const Layout = ({ children }) => (
  <div id='site-container'>
    <Helmet
      title="Jamie Gaehring"
      meta={[
        { name: 'description', content: "For nearly two decades, I've been helping farmers build a more open food system. Today, I'm working to give those farmers better access to the software, data and other tools that they need to feed their communities in the 21st century." },
        { name: 'keywords', content: 'agriculture, technology, software, data, open source, farming, hudson valley, new york city, new jersey, greenmarket, javascript, web development, local food' },
      ]}
    >
      <link rel='shortcut icon' href={favicon} />
    </Helmet>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
