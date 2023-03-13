import React, { useState } from 'react'

import AppWrap from '@/wrapper/AppWrap'
import MotionWrap from '@/wrapper/MotionWrap'
import {client} from "../../client"

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value} = e.target;

    setFormData({...formData, [name]: value})
  }
  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffe & Chat with me</h2>
    
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src="/images/email.png" alt="email" />
          <a href="mailto:alexanderalmeida3040@gmail.com" className='p-text'>alexanderalmeida3040@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src="/images/mobile.png" alt="Whatsapp" />
          <a href="https://wa.me/5522998035875" className='p-text'>+55 (22) 998035875</a>
        </div>
      </div>
      {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} className="p-text" />
        </div>
        <div className="app__flex">
          <input type="email" placeholder='Your Email' value={email} onChange={handleChangeInput} className="p-text" />
        </div>
        <div>
          <textarea className='p-text' placeholder='Your Message' name={message} value={message} onChange={handleChangeInput}/>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sendig" : "Send Message"}</button>
      </div>
      : <div>
        <h3 className='head-text'>Thank you for getting in touch</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg")