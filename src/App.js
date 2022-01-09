import React from 'react'
import {resumeData} from "./data"
import Header from './components/Header'
import Projects from './components/Projects'
import Layout from './components/layout'
import About from './components/About'
import Education from './components/Education'
import Work from './components/Work'
// import Skills from './components/Skills'
import Contact from './components/Contact'
const App = () => (
      <Layout>
        {resumeData ? (
          <>
            <Header
              mainData={resumeData.main}
              avatar={resumeData.main.avatar}
            />
            <div id="main">
              <About data={resumeData.main} />

              <Education resume={resumeData.resume} />
              <Work resume={resumeData.resume} />

              {/* <Skills resume={resumeData.resume} /> */}

              <Projects
                projects={resumeData.projects}
                github={resumeData.main.contact.github}
              />

              <Contact contact={resumeData.main.contact} />
            </div>
          </>
        ) : null}
      </Layout>
)

export default App