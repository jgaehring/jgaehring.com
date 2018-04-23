import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import logo from '../assets/golden-russet-black.svg'
import portrait from '../assets/portrait.jpg'
import { FaGithub } from 'react-icons/lib/fa'

const IndexPage = () => (
  <div className={styles.home}>
    <section className={styles.about}>
      <div className={styles.logo} >
        <img src={logo} />
        &mdash; &bull;&bull;&bull; &mdash;
      </div>
      <div className={styles.portrait}>
        <img src={portrait} />
      </div>
      <div className={styles.blurb} >
        <p>For nearly two decades, I've been helping farmers build a more open food system. Today, I'm working to give those farmers better access to the software, data and other tools that they need to feed their communities in the 21<sup>st</sup> century.</p>
        <h3 className={styles.contact}>
          &#123;{/*Use HTML code for curly braces b/c of jsx*/}
          <a href="mailto:jamie@jgaehring.com" target='_blank'>jamie@jgaehring.com</a>
          &#125;&nbsp;
          <a href="https://github.com/jgaehring" target='_blank'><FaGithub/></a>
        </h3>
      </div>
    </section>
    <section className={styles.blog}>
      <header>
        <h2>Writings</h2>
        <p>These are some things I've written.</p>
        <p><Link to='/blog'>Go to blog.</Link></p>
      </header>
    </section>
  </div>
)

export default IndexPage
