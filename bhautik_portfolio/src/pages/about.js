// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { immage } from '../pages/about.module.css'; // Import the CSS module

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main class="">
      <Layout pageTitle="About Me">
        <div className='flex w-screen'>
        <p class="pr-10">Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <img src="/images/bhautik_pic.jpg" alt="something" loading="lazy" className={immage} />
        </div>
      </Layout>
      
    </main>
  )
}

export const Head = () => <title>About Me</title>
// Step 3: Export your component
export default AboutPage