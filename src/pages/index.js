// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'react-scroll'
import Layout from '../components/layout.js' 
import Markdown from 'markdown-to-jsx';
import Headline from '../components/headline.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HomePage from './home.js';
import JobsPage from './jobs.js'
import AboutPage from './about.js';

// Step 2: Define your component
const IndexPage = () => {
  
  
  return (
      
    <div class=''>
      <Layout/>
      <section id="home" class='h-screen pt-16'>
        <HomePage/>
      </section>
      <section id="aboutme" class='h-screen pt-16 overflow-y-auto overflow-x-hidden'>
        <AboutPage/>
      </section>
      <section id="jobs" class='h-screen pt-16'>
        <JobsPage/>
      </section>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage