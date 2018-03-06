import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import logo from '../assets/golden-russet-black.svg'
import portrait from '../assets/portrait.jpg'

const IndexPage = () => (
  <div className={styles.home}>
    <section>
      <div className={styles.logo} >
        <img src={logo} />
        &mdash; &bull;&bull;&bull; &mdash;
      </div>
      <div className={styles.portrait}>
        <img src={portrait} />
      </div>
      <div className={styles.blurb} >
        <p>For nearly two decades, I've been helping farmers build a more open food system. Today, I'm working to give those farmers better access to the software, data and other tools that they need to feed their communities in the 21<sup>st</sup> century.</p>
      </div>
    </section>
  </div>
)

export default IndexPage
