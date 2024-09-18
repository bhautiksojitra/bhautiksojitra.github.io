import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/jobs" className={navLinkText}>
                Experience
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
                Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main className="justify-center">
        {children}
      </main>
    </div>
  )
}

export default Layout