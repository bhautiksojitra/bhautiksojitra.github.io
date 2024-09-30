import * as React from 'react'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navDiv
} from './layout.module.css'

const Layout = ({ children }) => {
  return (
      <nav class="sticky top-0 bg-white shadow-lg z-50 p-4">
        <ul className='flex justify-end items-center whitespace-nowrap'>
          <li className={navLinkItem}>
            <a href="#home">
              Home
            </a>
          </li>
          <li className={navLinkItem}>
            <a href="#aboutme">
              About Me
            </a>
          </li>
          <li className={navLinkItem} >
            <a href="#jobs">
                Experience
            </a>
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
  )
}

export default Layout