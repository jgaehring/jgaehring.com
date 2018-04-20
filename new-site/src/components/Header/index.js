import React from 'react'
import Link from 'gatsby-link'
import logo from '../../assets/golden-russet-black.svg'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.header} >
    <nav className={styles.nav}>
      <Link to="/" >
        <img src={logo} />
      </Link>
    </nav>
  </div>
)

export default Header
