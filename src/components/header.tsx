import React from 'react'
import Logo from '../assets/logo.svg'
import '../components/header.css'
import bgDesktop from '../assets/bg-header-desktop.png'
import bgMobile  from '../assets/bg-header-mobile.png'


export const Header = () => {
    return (
        <div className='header' >
            <img src={Logo} alt='Logo' className='logo-image' />

            <h3>A history of everythig you copy</h3>

            <p>Clipboard allows you to track and organize everything you copy.<br />
                Instantly access your clipboard on all your devices.</p>

            <div className='btns'>
                <button id='iosBtn'>Download for IOS</button>
                <button id='macBtn'>Download for Mac</button>
            </div>

        </div>
    )
}


