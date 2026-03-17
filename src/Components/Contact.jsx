import React from 'react'
import Navbar from './Navbar'
import '../StyleModule/Contact.css'
function Contact() {
  return (
    <div >
      
      <Navbar/>

       <div className="contact-container">
         <div className='form-container'>
           <h1 className='contact-title'>Contact <span className='highlight-text'>Me!</span></h1>
           <form action="" className='form'>
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