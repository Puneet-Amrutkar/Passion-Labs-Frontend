import React, { useState, useEffect } from 'react'
import './Features.css';

const Features = () => {

  return (
    <div className='featurescontainer' id='features'>
      <div className='heading'>
        <p className='ourfeatures'>Our Features</p>
        <p className='ourfeaturescontent'>Explore the exciting features that Passion Labs offers to schools</p>
      </div>
      <div className='featurescontain'>
        <div className='featuresbox'>
            <p className='featurewiseheading'>State-of-the-Art Kits</p>
            <p className='featurewisecontent'>Passion Labs provides schools with state-of-the-art kits for hands-on learning experiences.</p>
        </div>
        <div className='featuresbox'>
            <p className='featurewiseheading'>In-Person Mentoring</p>
            <p className='featurewisecontent'>Expert mentors are available to provide in-person guidance and support to teachers and students.</p>
        </div>
        <div className='featuresbox'>
            <p className='featurewiseheading'>24/7 Virtual Support</p>
            <p className='featurewisecontent'>Schools have access to round-the-clock virtual support for any technical assistance needed.</p>
        </div>
        <div className='featuresbox'>
            <p className='featurewiseheading'>Customized Curriculum</p>
            <p className='featurewisecontent'>Passion Labs offers customized curriculum to align with school's educational goals and standards.</p>
        </div>
        <div className='featuresbox'>
            <p className='featurewiseheading'>Professional Development</p>
            <p className='featurewisecontent'>Passion Labs offers customized curriculum to align with school's educational goals and standards.</p>
        </div>
        <div className='featuresbox'>
            <p className='featurewiseheading'>Engaging Workshops</p>
            <p className='featurewisecontent'>Interactive workshops are conducted to engage students and foster their interest in STEM subjects.</p>
        </div>
      </div>
    </div>
  )
}

export default Features