import React, { useEffect,  useState } from 'react'
import '../StyleModule/Navbar.css';
import { NavLink } from 'react-router';
import About from './About';

function Navbar() {
    
    const[screenWidth,setScreenWidth] = useState(window.innerWidth);
    
    const [showNav,setShowNav] = useState(false)
    console.log(screenWidth)

    useEffect(()=>{
        const handleResize = ()=>{
            setScreenWidth(window.innerWidth)
        }
         window.addEventListener("resize",handleResize);
         return ()=>{
            window.removeEventListener("resize",handleResize)
         }
    },[])

    const showNavbar = ()=>{
        setShowNav(true)
    }
    const closeNvbar = ()=>{
        setShowNav(false)
    }


  return (
    <div >
        {  screenWidth > 768 || showNav ?
        
        <div className="container">
             <div className='name'><h1 className='firstname'>Devesh</h1><h1 className='lastname'>Gupta</h1></div> 
            <div className='list-container'>
                <ul type = "none">
                    <li><NavLink style={{textDecoration: "none"}} to='/'>Home</NavLink></li>
                    <li><NavLink style={{textDecoration: "none"}} to='/about'>About</NavLink></li>
                    <li><NavLink style={{textDecoration: "none"}} to='/skills'>Skills</NavLink></li>
                    <li><NavLink style={{textDecoration: "none"}} to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            {screenWidth >768 ? "" : <button className='btn' style={{margin:"0px 0px 10px 10px"}} onClick={closeNvbar}>Close</button>}
        </div>
        : <button className='btn' onClick={showNavbar}>☰</button>
    }
   
    </div>
  )
}

export default Navbar;