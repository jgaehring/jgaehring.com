import React from 'react'
import Link from 'gatsby-link'
import logo from '../../assets/golden-russet-black.svg'
import styles from './header.module.css'

const Header = () => (
  <header className={styles.header} >
    <Link to="/">
      <img src={logo} alt="jgaehring.com logo"/>
    </Link>
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
