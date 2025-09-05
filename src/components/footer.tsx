import React from 'react'
import Logo from '../assets/logo.svg'
import FBIcon from '../assets/icon-facebook.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
import InstagramIcon from '../assets/icon-instagram.svg'
import '../components/footer.css'

export const Footer = () => {
  return (
    <div className='footer' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'4rem' , backgroundColor:'lightgray', marginInline:'0', padding:'50px'}}>

        <img src={Logo} alt="Logo" className="logoImg" />

        <ol style={{listStyle:'none' , display:'flex',flexDirection:'row', gap:'1.5rem'}}>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li> <br />
            <li>Press Kit</li>
            <li>Install Guide</li>
        </ol>

        <div className="socialMediaIcons" style={{display:'flex' , flexDirection:'row', gap:'10px'}}>
            <img src={FBIcon} alt="" className="facebook"  style={{maxHeight:40}}/>

            <img src={TwitterIcon} alt="" className="twitter"  style={{maxHeight:40}}/>

            <img src={InstagramIcon} alt="" className="instagram" style={{maxHeight:40}}/>
        </div>

    </div>
  )
}
