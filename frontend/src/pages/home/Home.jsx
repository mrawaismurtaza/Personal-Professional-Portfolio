import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"
import Button from '../../components/button/Button'
import Picture from '../../images/Software.jpeg'
import PortFolio from "../../images/Portfolio Picture.png" 
import { passion } from "../data/Data"

function Home() {

  const [ currentIndex, setCurrentIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => ( prevIndex + 1) % passion.length);
    }, 3000);

    return () => clearInterval(interval);

  }, []);






  return (
    <div className="Home">
        <Navbar/>
        <div className="Banner">
          <div className="Right-Section">
            <p>Hi, <br /> I'm Awais
            <br />
            <span className='Passion'>{passion[currentIndex]}</span>
            </p>
            <Button/>
          </div>
          <div className="Left-Section">
            <img src={Picture} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home