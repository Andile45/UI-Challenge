import React from 'react'
import Logo from '../assets/logo.svg'
import FBIcon from '../assets/icon-facebook.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
import InstagramIcon from '../assets/icon-instagram.svg'
import './footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <img src={Logo} alt="Logo" className="logoImg" />

      <ol className="footerLinks">
        <li>FAQs</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Press Kit</li>
        <li>Install Guide</li>
      </ol>

      <div className="socialMediaIcons">
        <img src={FBIcon} alt="Facebook" className="facebook" />
        <img src={TwitterIcon} alt="Twitter" className="twitter" />
        <img src={InstagramIcon} alt="Instagram" className="instagram" />
      </div>
    </div>
  )
}
