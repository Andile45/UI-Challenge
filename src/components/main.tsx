import React from 'react'
import './main.css'
import DesktopImg from '../assets/image-computer.png'
import TabletnMobileImg from '../assets/image-devices.png'
import BlackListIcon from '../assets/icon-blacklist.svg'
import PlainTextIcon from '../assets/icon-text.svg'
import SneakPreview from '../assets/icon-preview.svg'
import GoogleIcon from '../assets/logo-google.png'
import IBMIcon from '../assets/logo-ibm.png'
import MicrosoftIcon from '../assets/logo-microsoft.png'
import HewletOackardIcon from '../assets/logo-hp.png'
import VGicon from '../assets/logo-vector-graphics.png'

export const Main = () => {
    return (
        <div className='main'>

            {/* First Heading And Paragraph */}
            <div className='parag1'>
                <h2>Keep track of your snippets Clipboard</h2>
                <p>
                    Instantly stores any item you copy in the cloud, meaning you can access
                    your snippets immediately on all your devices. Our Mac and iOS apps will
                    help you organize everything.
                </p>
            </div>

            {/* Second picture and text */}
            <div className='parag2'>
                <img src={DesktopImg} alt='Desktop Image' className="desktopImg" />

                <section className='parag2Text'>
                    <h4>Quick Search</h4>
                    <p>Easily search your snippets by content, category, web address, application, and more.</p>

                    <h4>iCloud Sync</h4>
                    <p>Instantly saves and syncs snippets across all your devices.</p>

                    <h4>Complete History</h4>
                    <p>Retrieve any snippets from the first moment you started using the app.</p>
                </section>
            </div>

            {/* Paragraph 3 */}
            <div className="parag3">
                <h2>Access Clipboard anywhere</h2>
                <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
                <img src={TabletnMobileImg} alt="Tablet and a phone" className="mobileDevices" />
            </div>

            <div className="parag3">
                <h2>Supercharge your workflow</h2>
                <p>We’ve got the tools to boost your productivity.</p>
            </div>

            {/* Icons section */}
            <div className="icons">
                <div className="iconBox">
                    <img src={BlackListIcon} alt="Black List Icon" />
                    <h1>Create blacklists</h1>
                    <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                </div>

                <div className="iconBox">
                    <img src={PlainTextIcon} alt="Plain Text Icon" />
                    <h1>Plain text snippets</h1>
                    <p>Remove unwanted formatting from copied text for a consistent look.</p>
                </div>

                <div className="iconBox">
                    <img src={SneakPreview} alt="Sneak Preview Icon" />
                    <h1>Sneak preview</h1>
                    <p>Quick preview of all snippets on your Clipboard for easy access.</p>
                </div>
            </div>

            {/* Logos */}
            <div className="logos">
                <img src={GoogleIcon} alt="Google Icon" />
                <img src={IBMIcon} alt="IBM Icon" />
                <img src={MicrosoftIcon} alt="Microsoft Icon" />
                <img src={HewletOackardIcon} alt="HP Icon" />
                <img src={VGicon} alt="Vector Graphics Icons" />
            </div>

            {/* Paragraph 4 */}
            <div className="parag4">
                <h2>Clipboard for iOS and Mac OS</h2>
                <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
            </div>

            {/* Buttons */}
            <div className='btns'>
                <button id='iosBtn'>Download for iOS</button>
                <button id='macBtn'>Download for Mac</button>
            </div>
        </div>
    )
}
