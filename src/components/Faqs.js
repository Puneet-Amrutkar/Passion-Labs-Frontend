import React, { useState, useEffect } from 'react'
import './Faqs.css'

const Faqs = () => {

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) { // Adjust the scroll position trigger as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='faqssupercontainer'>
    <div id='faqs' className={`faqsmegacontainer ${isScrolled ? 'scrolled' : ''}`}>
      <div className='sectiontitlecontain'>
        <p className='sectiontitle'>Frequently Asked Questions</p>
      </div>
      <div className='faqscontain'>
        <div className='faqsbox'>
            <p className='faqswiseheading'>How can Passion Labs benefit my school?</p>
            <p className='faqswisecontent'>Passion Labs provides schools with the necessary tools and support to enhance STEM, AI, and Robotics education, ultimately preparing students for future careers in these fields.</p>
        </div>
        <div className='faqsbox'>
            <p className='faqswiseheading'>Are the kits provided by Passion Labs suitable for all grade levels?</p>
            <p className='faqswisecontent'>Yes, Passion Labs offers kits and curriculum that are tailored to different grade levels, ensuring that students of all ages can benefit from the program.</p>
        </div>
        <div className='faqsbox'>
            <p className='faqswiseheading'>Is there a minimum requirement for schools to enroll in Passion Labs program?</p>
            <p className='faqswisecontent'>No, Passion Labs welcomes schools of all sizes and backgrounds to participate in the program, regardless of their current resources or infrastructure.</p>
        </div>
        <div className='faqsbox'>
            <p className='faqswiseheading'>How can teachers access the in-person mentoring and virtual support?</p>
            <p className='faqswisecontent'>Teachers can easily reach out to Passion Labs team to schedule in-person mentoring sessions or to seek virtual support through the provided contact channels.</p>
        </div>
        <div className='faqsbox'>
            <p className='faqswiseheading'>Can schools request customized curriculum based on their specific needs?</p>
            <p className='faqswisecontent'>Yes, Passion Labs offers the flexibility to customize curriculum based on school's specific needs and educational objectives, ensuring a tailored learning experience.</p>
        </div>
        <div className='faqsbox'>
            <p className='faqswiseheading'>Are there any professional development opportunities for teachers?</p>
            <p className='faqswisecontent'>Yes, Passion Labs provides professional development opportunities for teachers to enhance their skills and knowledge in STEM, AI, and Robotics education.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Faqs