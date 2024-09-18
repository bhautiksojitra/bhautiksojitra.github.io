// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js' 

// Step 2: Define your component
const IndexPage = ({ data }) => {

  //const posts = data.allMarkdownRemark.edges;
  return (
    
    // <div className={container}>
    //   <link rel="preconnect" href="https://rsms.me/"/>
    //   <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
    //   <div className={leftPane}>
    //     {
    //       posts.map(({node}) => (
    //         <div className='p-10'>
    //           <h1 className='text-4xl font-bold pb-1 pt-1'>{node.frontmatter.name}</h1>
    //           <h2 className='text-xl font-semibold'>{node.frontmatter.title}</h2>
    //           <h3 className='text-gray-400'>{node.frontmatter.tagline}</h3>
    //         </div>
    //       ))
    //     }
    //   </div>
    //   <div className={rightPane}>
    //     <section id="section1" className='p-10'>
    //       <h2 className='text-xl font-bold italic'> About </h2>
    //       {
    //         posts.map(({ node }) => (
    //           <div className='prose text-white'>
    //             <Markdown>{node.html}</Markdown>
    //           </div>
    //       ))}
    //     </section>
    //     <section id="section2" className='pl-10'>
    //       <h2 className='text-xl font-bold italic'> Experience </h2>
    //       <Jobs/>
    //     </section>
    //   </div>
    // </div>
    <Layout></Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          name
          tagline
          title
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