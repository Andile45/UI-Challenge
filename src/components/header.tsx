import React from 'react'
import Logo from '../assets/logo.svg'
import '../components/header.css'

export const Header = () => {
    return (
        <header className='header'>
            <img src={Logo} alt='Clipboard Logo' className='logo-image' />

            <h1>A history of everything you copy</h1>

            <p>Clipboard allows you to track and organize everything you copy.<br />
                Instantly access your clipboard on all your devices.</p>

            <div className='btns'>
                <button id='iosBtn' aria-label='Download Clipboard for iOS'>Download for iOS</button>
                <button id='macBtn' aria-label='Download Clipboard for Mac'>Download for Mac</button>
            </div>
        </header>
    )
}


