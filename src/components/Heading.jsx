import React, { useState } from 'react'
import './Heading.css'
import WisdomPicture from '../assets/images/WisdomPicture.jpg'
import ResumeModal from './ResumeModal'


function Heading() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    return (
        <div>
            <div className='heading-container'>
                <div className='profile-section'>
                    <img src={WisdomPicture} alt='Wisdom Picture' className='wisdom-picture' />
                    <p className="caption">Wisdom Oyatokun</p>
                </div>
                <div className='heading-content'>
                    <div className='social-links'>
                        <p>Connect with me: +1 (234) 817-7874</p>
                        <p>Email me at: wisdomoyatokun@gmail.com</p>
                        <p>Kent, OH.</p>
                        <div className='social-links-container'>
                            <a href='https://www.linkedin.com/in/woyat/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                            <a href='https://github.com/Visdomoyat' target='_blank' rel='noopener noreferrer'>GitHub</a>
                            
                            <button onClick={() => setIsResumeModalOpen(true)} className='resume-btn'>Download my Resume</button>
                        </div>

  
                    </div>
                </div>


            </div>
            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setIsResumeModalOpen(false)} 
            />
        </div>
    )
}

export default Heading