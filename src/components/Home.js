import React, { useState, useEffect } from 'react'
import './Home.css';
import Typewriter from '../constants/typewriter';
import MyTextField from '../constants/textfield';
import homeimage from '../assets/homeimage.png'

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 4000); // Adjust the delay time as needed (in milliseconds)

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='megacontainer' id='home'>
      <div className='container1'>
        <img className='homeimage' src={homeimage} />
      </div>
      <div className='container2'>
        <p className='homeheading'>
          <Typewriter text="Empowering Schools with STEM, AI, and Robotics Education..." speed={100} className='homeheading'/>
        </p>
        {isVisible && <p ClassName={isVisible ? 'homesubheading' : ''} id='homesubheading'>Passion Labs provides cutting-edge kits and expert mentoring for schools to enhance STEM, AI, and Robotics education.</p>}
        <div className='textfieldandbutton'>
          {isVisible && <MyTextField /> }
          {isVisible && <button className='button'> Click Me </button> }
        </div>
      </div>
    </div>
  )
}

export default Home
