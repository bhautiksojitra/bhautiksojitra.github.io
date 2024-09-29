// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { immage } from '../pages/about.module.css'; // Import the CSS module
import { graphql, useStaticQuery } from 'gatsby';
import Markdown from 'markdown-to-jsx';
import Headline from '../components/headline.js';

// Step 2: Define your component
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/aboutme/"}}
            sort: {frontmatter: {id: ASC}}) {
              edges {
                node {
                    html
                }
              }
            }
    }
    `
  )
  const info = data.allMarkdownRemark.edges[0].node.html;
  return (
    <main>
        <div className='flex flex-col w-screen items-center mt-24'>
          <div className='flex flex-col md:flex-row lg:flex-row w-2/3  min-w-96'>
            <div>
              <Headline placeholder="About Me"/>
              <Markdown class="mt-5">{info}</Markdown>
            </div>
            <div class="pr-5 mt-5">
              <img src="/images/bhautik_pic.jpg" alt="something" loading="lazy" class="m-10 w-72 min-w-72 h-auto object-top object-contain" />
            </div>
          </div>
        </div>
    </main>
  )
}

export const Head = () => <title>About Me</title>
// Step 3: Export your component
export default AboutPage