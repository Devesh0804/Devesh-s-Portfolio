import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home'
import { Route ,Routes } from 'react-router'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'


function App() {

  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/skills' element={<Skills/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
    
  </Routes>
   
     
     
    </>
  )
}

export default App
