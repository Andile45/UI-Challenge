import React from 'react'
import Logo from '../assets/logo.svg'
import FBIcon from '../assets/icon-facebook.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
import InstagramIcon from '../assets/icon-instagram.svg'
import './footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <img src={Logo} alt="Clipboard Logo" className="logoImg" />

      <nav className="footerLinks" aria-label="Footer navigation">
        <ul>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#press">Press Kit</a></li>
          <li><a href="#install">Install Guide</a></li>
        </ul>
      </nav>

      <div className="socialMediaIcons" role="list" aria-label="Social media links">
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <img src={FBIcon} alt="Facebook" className="facebook" />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="twitter" />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="instagram" />
        </a>
      </div>
    </footer>
  )
}
