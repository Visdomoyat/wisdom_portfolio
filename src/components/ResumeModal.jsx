import React from 'react'
import './ResumeModal.css'

function ResumeModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const handleDownload = (filename) => {
        const link = document.createElement('a')
        link.href = `/resume_options/${filename}`
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Download My Resume</h2>
                <div className="resume-options">
                    <div className="resume-option">
                        <h3>Full Stack Developer Resume</h3>
                        <p>My technical resume highlighting software development skills and projects</p>
                        <button 
                            onClick={() => handleDownload('WisdomOyatokun_FullStackDeveloper.pdf')}
                            className="download-btn"
                        >
                            Download Full Stack Developer Resume
                        </button>
                    </div>
                    
                    <div className="resume-option">
                        <h3>Instructional Designer Resume</h3>
                        <p>My instructional design resume focusing on learning and development experience</p>
                        <button 
                            onClick={() => handleDownload('WisdomOyatokun_Instructional Designer.pdf')}
                            className="download-btn"
                        >
                            Download Instructional Designer Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeModal 