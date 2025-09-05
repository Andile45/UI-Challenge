import React from 'react'
import '../components/main.css'
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
import '../components/main.css'

export const Main = () => {
    return (
        <div className='main'>

            {/* First Heading And Paragraph */}
            <div className='parag1'>

                <h2>Keep track of your snippets Clipboard</h2>
                <p>
                    instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
                </p>

            </div>

            {/* Second picture and text */}
            <div className='parag2' style={{ marginTop: '3.5rem' }}>

                <img src={DesktopImg} style={{ float: 'left', marginRight: 70, marginLeft: 100, maxWidth: 400 }} alt='Desktop Image' />

                <section className='parag2Text'>

                    <h4>Quick Search</h4>

                    <p>Easily search your snippets by content, category, web address, application, and more.</p>

                    <h4>iCloud Sync</h4>

                    <p>Instantly saves and syncs snippets across all your devices.</p>

                    <h4>Complete History</h4>

                    <p>Retrieve any snippets from the first moment you started using the app.</p>

                </section>
            </div>

            {/* parag3 */}

            <div className="parag3" style={{ marginTop: '5.5rem' }}>

                <h2>Access Clipboard anywhere</h2>

                <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>

                <img src={TabletnMobileImg} alt="Tablet and a phone" className="MobileDevices" />


            </div>

            <div className="parag3">

                <h2>Supercharge your workflow</h2>

                <p>We’ve got the tools to boost your productivity.</p>
            </div>

            <div className="icons" style={{ display: 'flex', flexDirection: 'row', gap: '2rem', marginTop: '7rem' }}>

                <div className="createBlacklist">

                    <img src={BlackListIcon} alt="Black List Icon" className="blackListImg" />

                    <h1 style={{ fontSize: '1.5rem' }}>Create blacklists</h1>

                    <p>Ensure sensitive information never makes its way to
                        your clipboard by excluding certain sources.</p>

                </div>

                <div className="plainTextSnippets">

                    <img src={PlainTextIcon} alt="Plain Text Icon" />

                    <h1 style={{ fontSize: '1.5rem' }}>Plain text snippets</h1>

                    <p>Remove unwanted formatting from copied
                        text for a consistent look.</p>

                </div>

                <div className="sneakPreview">

                    <img src={SneakPreview} alt="Sneak Preview Icon" />

                    <h1 style={{ fontSize: '1.5rem' }}>Sneak preview</h1>

                    <p>Quick preview of all snippets
                        on your Clipboard for easy access</p>


                </div>


            </div>

            <div className="icons" style={{ display: 'flex', flexDirection: 'row', gap: '7rem', marginTop: '5rem', justifyContent: 'center' }}>

                <img src={GoogleIcon} alt="Google Icon" className="google" />

                <img src={IBMIcon} alt="IBM Icon" className="IBMIcon" />

                <img src={MicrosoftIcon} alt="Microsoft Icon" className="MicroSoftIcon" />

                <img src={HewletOackardIcon} alt="HP Icon" className="HewlettIcon" />

                <img src={VGicon} alt="Vector Graphics Icons" className="vectorGraphics" />

            </div>

            <div className="parag4" style={{ marginTop: '5rem' }}>

                <h2>Clipboard for iOS and Mac OS</h2>

                <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
            </div>

            <div className='btns' style={{marginTop:'3rem'}}>
                <button id='iosBtn'>Download for IOS</button>
                <button id='macBtn'>Download for Mac</button>
            </div>
        </div>
    )
}
