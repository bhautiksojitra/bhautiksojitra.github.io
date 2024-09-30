import * as React from 'react'
import Layout from '../components/layout'
const ContactPage = () => {
    const handleClick = (event) => {
        var callerElement = event.currentTarget.getAttribute("data-tab");
        const contents = document.querySelectorAll(".content");
        contents.forEach((content) => content.classList.add("hidden"));

        document.getElementById(`content-${callerElement}`).classList.remove("hidden");
    };
    return (
        <main>
        <Layout pageTitle="Contact">
        <div>
            <div>
                <button onClick={handleClick} data-tab="1" className="tab-button"> Tab 1 </button>
                <button onClick={handleClick} data-tab="2" className="tab-button"> Tab 2 </button>
                <button onClick={handleClick} data-tab="3" className="tab-button"> Tab 3 </button>
            </div>
            <div id="content-container" className="p-4">
                <div id="content-1" className='content'>This is the content for Tab 1.</div>   
                <div id="content-2" className='content hidden'>This is the content for Tab 2.</div>   
                <div id="content-3" className='content hidden'>This is the content for Tab 3.</div>   
            </div>
        </div>
        </Layout>
        </main>
    )
}
export default ContactPage