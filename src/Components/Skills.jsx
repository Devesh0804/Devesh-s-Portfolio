import React from 'react'
import Navbar from './Navbar'
import '../StyleModule/About.css'

function Skills() {
  return (
    <div><Navbar/>
        <div className="about-container">
                 
        <div className="box">
          <h3 className="title">FRONTEND DEVELOPMENT</h3>

          <ul className="skills-list">
            <li>HTML-5</li>
            <li>CSS-3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div className="box">
          <h3 className="title">BACKEND DEVELOPMENT</h3>
          <ul className="skills-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST API</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="box">
          <h3 className="title">TOOLS & OTHER SKILLS</h3>
          <ul className="skills-list">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>PostMan</li>
            <li>Basic Data Structures</li>
          </ul>        
        </div>

      </div>
    
    </div>
  )
}

export default Skills