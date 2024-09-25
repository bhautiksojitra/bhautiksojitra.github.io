import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navDiv
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={navDiv}>
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
      
      <div class="flex justify-center h-lvh items-center">
        <main className='inline-flex flex-col w-2/5 min-w-96 mx-auto '>
          <div class="flex items-center space-x-4 mb-5">
            <h2 class="text-2xl">{pageTitle}</h2>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout