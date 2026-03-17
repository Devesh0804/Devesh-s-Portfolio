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
    <div className='navbar-wrapper'>
        {  screenWidth > 768 || showNav ?
        
        <div className="container">
             <div className='name'>
               <h1 className='firstname'>Devesh</h1>
               <h1 className='lastname'>Gupta</h1>
             </div> 
            <div className='list-container'>
                <ul className="nav-list">
                    <li><NavLink className="nav-link" to='/'>Home</NavLink></li>
                    <li><NavLink className="nav-link" to='/about'>About</NavLink></li>
                    <li><NavLink className="nav-link" to='/skills'>Skills</NavLink></li>
                    <li><NavLink className="nav-link" to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            {screenWidth > 768 ? "" : <button className='btn close-btn' onClick={closeNvbar}>Close</button>}
        </div>
        : <button className='btn menu-btn' onClick={showNavbar}>☰ Menu</button>
    }
   
    </div>
  )
}

export default Navbar;