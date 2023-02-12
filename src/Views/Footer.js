import React from 'react'
import logo from '../Assets/Images/mpgilogo.webp'
import '../Assets/CSS/Footer.css'
const Footer = () => {

  return (
    <div className='footer-div'>
      <div className='footer-card'>
        <img src={logo} alt='logo' className='footer-logo'/>
        <h1>Matoshree Pratishthan School of Engineering.</h1>
        <h4>Khupsarwadi Nanded ,Maharashtra. 431606.</h4>
        <p>&#169; 2020-2024 Matoshree Pratishthan Group of Institute. All Right Reserved.</p>
      </div>
      <div className='footer-card'>
        <h3>General Enquiries</h3>
        <p>panchalsg5@gmail.com</p>
        <h3>Call Us</h3>
        <p>+91-8600406951</p>
        <h3>Timing</h3>
        <p>Mon to Fri : 09:30 am to 05:30 pm</p>
        <p>Sat & Sun : Closed 12:00 am to 12:00 am </p>

      </div>
      <div className='footer-card'>
        <input type='text' placeholder='Your Name' className='footer-input'/><br/>
        <input type='tel' placeholder='Your mobile number' className='footer-input'/><br/>
        <input type='email' placeholder='Your email' className='footer-input' /><br/>
        <input type='text' placeholder='Your message' className='footer-input' /><br/>
        <button className='footer-btn'>Submit</button>

      </div>
    </div>
  )
}

export default Footer
