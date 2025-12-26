import React from 'react'
import Link from 'gatsby-link'
import logo from '../../assets/golden-russet-black.svg'
import { current, header, nav } from './header.module.css'

const Header = ({ pathname }) => {
  const navLink = (pathname, to, name) => (
    <li className={
      pathname.split('/')[1] === to.split('/')[1]
        ? current
        : null
    }>
      <Link to={to}>{name}</Link>
    </li>
  )
  return (
    <header className={header} >
      <Link to="/">
        <img src={logo} alt="jgaehring.com logo"/>
      </Link>
      <nav className={nav}>
        <ul>
          {
            navLink(pathname, "/", "Home")
          }
          {
            navLink(pathname, "/blog", "Blog")
          }
          {
            navLink(pathname, "/about", "About")
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
