import React, {useState, useEffect} from 'react'
import Layout from '../components/layout.js'
import { graphql, useStaticQuery } from 'gatsby';
import Markdown from 'markdown-to-jsx';
const JobsPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/jobs/"}}
                sort: {frontmatter: {id: ASC}}) {
                    edges {
                        node {
                            html
                            frontmatter {
                                id
                                company
                                position_name
                                duration
                            }
                        }
                    }
                }
        }
        `
    )
    const tabs = data.allMarkdownRemark.edges;
    const [activeTab, setActiveTab] = useState(0);
    
    useEffect(() => {
        setActiveTab(0);
    }, []);
    
    return (
        <Layout pageTitle="Jobs">
        <div class="m-1" >
            <ul class="text-sm flex">
                {tabs.map((tab) => (
                    <li className={`border-b mb-2 text-center hover:bg-slate-100 transition-colors duration-200
                                    ${activeTab === tab.node.frontmatter.id ? "border-b-4 border-b-red-950" : "border-b-2"}`}>
                        <a href="#"
                        key={tab.node.frontmatter.id}
                        onClick={() => setActiveTab(tab.node.frontmatter.id)}
                        className={`inline-block whitespace-nowrap px-4 py-2 font-medium 
                            ${activeTab === tab.node.frontmatter.id ? "text-red-800" : "text-gray-600"} 
                            transition-colors duration-200`}>
                        {tab.node.frontmatter.company}
                        </a>
                    </li>
                ))}
            </ul>

            <div>
            <p className='mb-2 mt-2'>{tabs[activeTab].node.frontmatter.position_name} @ {tabs[activeTab].node.frontmatter.company}</p>
            <p className='text-sm mb-2'>{tabs[activeTab].node.frontmatter.duration}</p>
            <Markdown  className='prose'> 
                {tabs[activeTab].node.html} 
            </Markdown>
            </div>
      </div>
        </Layout>
    )
}

export default JobsPage