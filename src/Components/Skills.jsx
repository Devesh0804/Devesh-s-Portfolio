import React from 'react'
import Navbar from './Navbar'
import '../StyleModule/About.css'

function Skills() {
  return (
    <div><Navbar/>
        <div className="about-container">
                 
        <div className="box">
          <center><h3>FRONTEND DEVELOPMENT</h3></center>

          {/* <h4 style={{ textAlign: "center", fontWeight: "370" }}></h4> */}
          <ul style={{display:'flex',flexDirection:"column"}}>
            <li style={{fontWeight: "370"}}>HTML-5</li>
            <li style={{fontWeight: "370"}}>CSS-3</li>
            <li style={{fontWeight: "370"}}>JavaScript</li>
            <li style={{fontWeight: "370"}}>React.js</li>
            <li style={{fontWeight: "370"}}>Responsive Design</li>
          </ul>
        </div>
        <div className="box">
          <center><h3>BACKEND DEVELOPMENT</h3></center>
         <ul style={{display:'flex',flexDirection:"column"}}>
            <li style={{fontWeight: "370"}}>Node.js</li>
            <li style={{fontWeight: "370"}}>Express.js</li>
            <li style={{fontWeight: "370"}}>REST API</li>
            <li style={{fontWeight: "370"}}>MongoDB</li>
          </ul>
        </div>
        <div className="box">
          <center><h3 lassName='title'>TOOLS & OTHER SKILLS</h3></center>
          <ul style={{display:'flex',flexDirection:"column"}}>
            <li style={{fontWeight: "370"}}>Git & GitHub</li>
            <li style={{fontWeight: "370"}}>VS Code</li>
            <li style={{fontWeight: "370"}}>PostMan</li>
            <li style={{fontWeight: "370"}}>Basic Data Structures</li>
          </ul>        </div>

      </div>
    
    </div>
  )
}

export default Skills