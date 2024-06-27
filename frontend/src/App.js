import React from 'react';
import './App.css';
import Home from "./pages/home/Home.jsx"
import Skills from './pages/skills/Skills';
import About from './pages/about/About.jsx';
import Contact from './pages/Contact/Contact.jsx';


function App() {
  return (
      <div className='App'>
        
        <Home/>
        <Skills/>
        <About/>
        <Contact/>
      </div>
  );
}

export default App;
