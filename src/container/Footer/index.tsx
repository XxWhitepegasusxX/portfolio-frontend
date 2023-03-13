import React, { useState } from 'react'

import AppWrap from '@/wrapper/AppWrap'
import MotionWrap from '@/wrapper/MotionWrap'
import emailjs from "@emailjs/browser"

const Footer = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [loading, setLoading] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const submit = () => {
    setIsFormSubmitted(true)
    setLoading(false)
  }

  const handleSubmit = () => {
    if(name == "" || email == '' || message === ''){
      alert("All information needed!")
      return;
    }else{
      setLoading(true)
  
      const templateParams = {
        from_name: name,
        email: email,
        message: message
      }
  
      emailjs.send("service_6klvc2q", "template_fooubbk", templateParams, "5Knj5cQutiTwgrie1").then((response) => {
        console.log("Email enviado", response.status, response.text)
      }, err => {
        console.log(err)
      }).finally(() => submit())
    }
  }

  return (
    <>
      <h2 className='head-text'>Take a coffe & Chat with me</h2>
    
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src="/images/email.png" alt="email" />
          <a href="mailto:alexanderalmeida3040@gmail.com" className='p-text'>alexanderalmeida3040@gmail.com</a>
        </div>
        <div className="app__footer-card cv">
          <img src="/images/document.png" alt="Whatsapp" />
          <a href="AlexanderAlmeidaCV(English).pdf" download="AlexanderAlmeidaCV(English).pdf" className='p-text'>My CV</a>
        </div>
        <div className="app__footer-card">
          <img src="/images/mobile.png" alt="Whatsapp" />
          <a href="https://wa.me/5522998035875" className='p-text'>+55 (22) 998035875</a>
        </div>
      </div>
      {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} className="p-text" />
        </div>
        <div className="app__flex">
          <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} className="p-text" />
        </div>
        <div>
          <textarea className='p-text' placeholder='Your Message' name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
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