import React, {useState, useEffect} from 'react'
import Layout from '../components/layout.js'
import { graphql, useStaticQuery } from 'gatsby';
import Markdown from 'markdown-to-jsx';
import Headline from '../components/headline.js';
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
                                tech_stack
                                company_fullname
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
            <div className='flex flex-col w-screen items-center mt-24'>  
                <div className='flex flex-col w-2/3  min-w-96'>
                    <Headline placeholder="Where I've Worked"/>
                    <ul class="flex mt-5">
                        {tabs.map((tab) => (
                            <li className={`border-b mb-2 text-center hover:bg-slate-100 transition-colors duration-200
                                            ${activeTab === tab.node.frontmatter.id ? "border-b-4 border-b-red-950" : "border-b-2"}`}>
                                <a
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
                        <p className='mb-2 mt-2'>{tabs[activeTab].node.frontmatter.position_name} @ {tabs[activeTab].node.frontmatter.company_fullname}</p>
                        <p className='text-sm mb-2'>{tabs[activeTab].node.frontmatter.duration}</p>
                        <Markdown  className='prose'> 
                            {tabs[activeTab].node.html} 
                        </Markdown>
                        {tabs[activeTab].node.frontmatter.tech_stack.map((title) => (
                            <div class="border px-3 mt-3 mx-1 inline-flex rounded-full"> 
                                {title[0]} 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default JobsPage