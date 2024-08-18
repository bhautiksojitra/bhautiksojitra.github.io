import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <li key={node.id}>
                            {node.excerpt}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx {
    nodes {
      excerpt
      id
    }
  }
}
`

export const Head = () => <title>Blog Page</title>

export default BlogPage