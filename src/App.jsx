import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import './App.css'
import Experience from "./components/Experience";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'


const App = () => {

  return (
    <div >
      < Navbar />
      <hr />
      <div className='app-main-div'>
      <div className='containar'>
        <Home />
        {/* <Experience /> */}
        <Skills />
        <Projects/>
        <Contact/>
      </div>
      </div>
      
      
      
    </div>
    
  );
}

export default App;
