import React from 'react'
import img2 from '../assets/WhatsApp Image 2026-03-17 at 8.40.58 PM.jpeg'
import Navbar from './Navbar'
import '../StyleModule/Home.css'
import About from './About'
import { NavLink , Link} from 'react-router'
function Home() {

  return (
    <div>
        <Navbar/>
        <div className='container1'>
            <div className=" infoContainer">
                <h2 className='heads'>Hello I'm</h2>
                <h1 className='heads'>DEVESH GUPTA</h1>
                <div className='proffesion'>
                <h2 className=''>And I'm a <span className="highlight-text">Web Developer </span></h2>
                </div>
                <p className="description-text">Hi I'm Devesh Gupta a B.Tech student and aspiring software developer passionate about web development and modern technologies</p>
                <div className="socialmedia-icons-container">
                     <Link className='social-media-icons' to={'https://www.instagram.com/_devesh_.238?igsh=Z2EyZzU2ZnYwazJk&utm_source=qr'}>  <i className="fa-brands fa-instagram" id='ig'></i></Link>
                     <Link className='social-media-icons' to={'https://www.facebook.com/devesh.gupta.121398'}> <i className="fa-brands fa-facebook-f"></i></Link>
                     <Link className='social-media-icons' to={'https://www.linkedin.com/in/devesh-gupta-3b473b293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'}>  <i className="fa-brands fa-linkedin-in"></i></Link>
                </div>
                <button className="butn" style={{width:"150px"}}>Download CV</button>
            </div>
            <div className=" image-container">
                <img src={img2} alt="" width={300} height={300} style={{ objectFit: "cover", objectPosition :"center"}}/>
            </div>  
        </div>
     
    </div>
  )
}

export default Home