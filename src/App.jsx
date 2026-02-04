import { useState } from 'react'
import './App.css'
import About from './Components/About.jsx';
import Education from './Components/Education.jsx';
import Contact from './Components/Contact.jsx';
import Projects from './Components/Work.jsx';
import Experience from './Components/Experience.jsx';
import Skills from './Components/Skills.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

function App() {

  return (
    <>
      <div className='bg-gray-900'>
         <div className='absolute h-full w-full bg-slate-950" bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[15px_24px]'></div>
        <div className='relative pt-20'> 
          <Navbar/>
          <About/>
          <Skills/>
          <Education/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
