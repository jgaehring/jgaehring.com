import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'
import favicon from '../assets/favicon.ico'

const TemplateWrapper = ({ children }) => (
  <div id='site-container'>
    <Helmet
      title="Jamie Gaehring"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link rel='shortcut icon' href={favicon} />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
