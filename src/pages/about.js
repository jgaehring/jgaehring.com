import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';

export default function About ({ data, location }) {
  return (
    <Layout>
      <Helmet
        title="About | Jamie Gaehring">
      </Helmet>
      <Header pathname={location.pathname}/>
    </Layout>
  )
}