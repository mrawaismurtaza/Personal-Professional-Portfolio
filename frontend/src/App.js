import React from 'react';
import './App.css';
import Home from "./pages/home/Home.jsx"
import Skills from './pages/skills/Skills';
import About from './pages/about/About.jsx';


function App() {
  return (
      <div className='App'>
        
        <Home/>
        <Skills/>
        <About/>
      </div>
  );
}

export default App;
