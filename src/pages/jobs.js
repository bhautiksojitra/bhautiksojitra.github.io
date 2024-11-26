import React, {useState, useEffect} from 'react'
import Layout from '../components/layout.js'
import { graphql, useStaticQuery } from 'gatsby';
import Markdown from 'markdown-to-jsx';
import Headline from '../components/headline.js';
import JobData from '../data/jobData.json';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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

    // State to track which dropdown item is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle function to expand/collapse details
  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
    
    useEffect(() => {
        setActiveTab(0);
    }, []);
    
    return (
            <div className='flex flex-col w-screen items-center mt-24'>  
                <div className='flex flex-col w-1/2  min-w-96'>
                    <Headline placeholder="Where I've Worked"/>
                    <ul class="flex mt-5">
                        {JobData.map((job, index) => (
                            <li className={`border-b mb-2 text-center hover:bg-slate-100 transition-colors duration-200
                                            ${activeTab === index ? "border-b-4 border-b-red-950" : "border-b-2"}`}>
                                <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`inline-block whitespace-nowrap px-4 py-2 font-medium 
                                    ${activeTab === index ? "text-red-800" : "text-gray-600"} 
                                    transition-colors duration-200`}>
                                {job.CompanyName}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <p className='mb-2 mt-2'>{JobData[activeTab].JobTitle} @ {JobData[activeTab].CompanyName}</p>
                        <p className='text-sm mb-2'>{JobData[activeTab].Duration}</p>
                        
                        {JobData[activeTab].JobDescription.map((description, index) => (
                            <div key={index}>
                            <div
                              className="p-3 border mb-2 flex cursor-pointer hover:bg-slate-500"
                              onClick={() => toggleExpand(index)}
                            >
                              <div className="mr-5">
                                {expandedIndex === index ? (
                                  <IoIosArrowUp size={30} />
                                ) : (
                                  <IoIosArrowDown size={30} />
                                )}
                              </div>
                              <div className="font-bold">{description.Title}</div>
                            </div>
                            {expandedIndex === index && (
                              <ul className="pl-8 mb-5 list-disc text-sm text-gray-700 space-y-2">
                              {description.Details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>
                            )}
                          </div>
                        ))}

                    </div>
                </div>
                </div>
    )
}

export default JobsPage