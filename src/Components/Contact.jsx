import React from 'react'
import Navbar from './Navbar'
import '../StyleModule/Contact.css'
function Contact() {
  return (
    <div >
      
      <Navbar/>

       <div className="contact-container">
         <div className='form-container'>
       <center>    <h1 style={{fontFamily:'Poppins,sans-serif'}}>Contact <span style={{color:'blue'}}>Me!</span></h1></center>
           <form action="" className= 'form' style={{}}>
              <input type="text" name="" id="" placeholder='Full name'/>
              <input type="text" name="" id="" placeholder='Email Address'/>
              <input type="text" name="" id="" placeholder='Mobile Number' />
              <input type="text" name="" id="" placeholder='Email subject' />
              <textarea name="" id="" placeholder='Your Message'></textarea>
             <button className='form-btn'>Send Message</button>
           </form>
           
           </div>
       </div>
    </div>
  )
}

export default Contact