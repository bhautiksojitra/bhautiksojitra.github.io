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
        <ul className='flex justify-end items-center whitespace-nowrap'>
          <li className={navLinkItem}>
            <Link to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about">
              About Me
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/jobs">
                Experience
            </Link>
          </li>
          <li className={navLinkItem}>
            <a  href='mailto:bsojitra2331@gmail.com'
                class='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'> Let's Connect </a>
          </li>
          <li className={navLinkItem}>
            <a href='/Resume_Bhautik_Sojitra.pdf' target='_blank' class='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'> Resume </a>
          </li>
        </ul>  
      </nav>
      {children}
      </div>
  )
}

export default Layout