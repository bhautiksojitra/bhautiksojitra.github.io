// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js' 
import Markdown from 'markdown-to-jsx';

// Step 2: Define your component
const IndexPage = ({ data }) => {
  const frontmatterref = data.allMarkdownRemark.edges[0].node.frontmatter;
  const fullname = frontmatterref.name;
  const tagline = frontmatterref.tagline;
  const title = frontmatterref.title;
  const info = data.allMarkdownRemark.edges[0].node.html;
  
  return (
    <Layout pageTitle="Hi, my name is">
      <div>
      <h1 className='text-7xl mb-2'> {fullname} </h1>
      <h1 className='text-2xl mb-2 text-gray-600'>{tagline}</h1>
      <Markdown>{info}</Markdown>
      </div>
    </Layout>
  )
}

export const query = graphql`
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

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage