import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links_logo">
          <h1>Passion Labs</h1>
        </div>
      <div className="navbar-links">
        <div className="navbar-links_container">
          <a href="#home" className='home'>HOME</a>
          <a href="#features" className='features'>FEATURES</a>
          <a href="#faqs" className='faq'>FAQ</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;