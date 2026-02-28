import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import '../StyleModule/About.css'

function About() {
  return (
    <div>
      <Navbar />

      <div className="about-container">

        <div className="box">
          <center><h3 className='title'>FRONTEND & MERN DEVELOPER</h3></center>

          <h4 style={{ textAlign: "center", fontWeight: "370" }}>I am a passionate MERN Stack Developer and B.Tech student with strong knowledge of HTML, CSS, JavaScript, React, Node.js, and MongoDB. I love building modern, responsive, and user-friendly web applications.</h4>
        </div>
        <div className="box">
          <center><h3 lassName='title'>WHAT I DO </h3></center>
          <h4 style={{ textAlign: "center", fontWeight: "370" }}>I develop full-stack web applications using the MERN stack. I focus on writing clean code, creating responsive UI, building REST APIs, and integrating frontend with backend efficiently.</h4>

        </div>
        <div className="box">
          <center><h3 lassName='title'>MY GOAL</h3></center>
          <h4 style={{ textAlign: "center", fontWeight: "370" }}>My goal is to become a professional software developer and work in a top tech company. I am continuously improving my skills and learning new technologies to build scalable applications</h4>
        </div>

      </div>
    </div>
  )
}

export default About