// Step 1: Import React
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout.js' 
import Markdown from 'markdown-to-jsx';
import Headline from '../components/headline.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Step 2: Define your component
const HomePage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/blog/"}}
            ) {
                edges {
                node {
                    html
                    frontmatter {
                    name
                    title
                    tagline
                    }
                }
                }
            }
            }
        `
      )
  const frontmatterref = data.allMarkdownRemark.edges[0].node.frontmatter;
  const fullname = frontmatterref.name;
  const tagline = frontmatterref.tagline;
  const title = frontmatterref.title;
  const info = data.allMarkdownRemark.edges[0].node.html;
  
  return (
    
      <div className='flex flex-col w-screen items-center mt-24'>
        <div className='flex flex-col w-1/2 min-w-96'>
          <Headline placeholder="Hi, my name is"/>
          <div className='lg:text-6xl md:text-5xl sm: text-4xl font-bold mb-2'> {fullname} </div>
          <div className='lg:text-4xl md:text-3xl sm: text-2xl mb-2 text-gray-600'>{tagline}</div>
          <Markdown class="lg:text-xl md:text-lg sm:text-sm min-w-96">{info}</Markdown>
          <ul class="flex mt-5 space-x-2">           
            <li> 
              <a href="https://github.com/bhautiksojitra" target="_blank">
                <FaGithub size={25}/> 
              </a>
            </li>
            <li> 
              <a href="https://linkedin.com/in/bhautik-sojitra/" target="_blank">
                <FaLinkedin size={25}/> 
              </a> 
            </li>
          </ul>
        </div>
      </div>
    
  )
}

export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default HomePage