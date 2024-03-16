import React from 'react'
import './Mailbox.css';
import emailicon from '../assets/emailicon.png'

const Mailbox = () => {
  return (
    <div className='containemail'>
        <img src={emailicon} />
        <p>Email</p>
    </div>
  )
}

export default Mailbox
