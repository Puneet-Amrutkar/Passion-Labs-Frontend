import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="container">
      <svg viewBox="0 0 500 50" preserveAspectRatio="none">
        <path d="M0,30 C100,60 200,0 300,30 C400,60 500,10 500,30 L500,0 L0,0 Z" fill="#fff"></path>
      </svg>
      <p><a href='#'>Privacy Policy</a> | <a href='#'>Terms of Service</a></p>
      <p>© 2024 Empowering Schools with STEM, AI, and Robotics Education All Rights Reserved</p>
    </div>
  )
}

export default Footer