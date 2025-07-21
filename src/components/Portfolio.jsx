import { useState } from 'react'
import './Portfolio.css'
// Import local images
import visdomDev from '../assets/images/Visdom-Dev.png'
import scrambledWord from '../assets/images/Scrambled word.png'
import inventoryApp from '../assets/images/InventoryApp.png'
import zombieFighters from '../assets/images/Zombie Fighters.png'
import ledgerLine from '../assets/images/LedgerLine.png'
import instructionDesign from '../assets/images/InstructionalDesign.png'

function Portfolio() {
    const [fullStackPortfolio, setFullStackPortfolio] = useState([
        {
            id: 1,
            title: 'LedgerLine (Team Project)',
            description: 'LedgerLine is a python-Django web application that allows users to manage their finances and track their income and expenses.',
            image: ledgerLine,
            link: 'https://ledgerline-a661b98ef7f7.herokuapp.com/'
        },
        {
            id: 2,
            title: 'Visdom-Dev (Solo Project)',
            description: 'This is a React-based service application that allows user to understand the services Visdom has to offer and they could be reached for biusiness patronage.',
            image: visdomDev, // Using local image
            link: 'https://visdom-dev.netlify.app/'
        },
        {
            id: 3,
            title: 'Scramble_D_word (Solo Project)',
            description: 'This is a JavaScript-based word game that allows users improve there vocabulary and spelling especially for kids between the ages of 5-10.',
            image: scrambledWord, // Using local image
            link: 'https://visdomoyat.github.io/scramble_D_words/'
        },
        {
            id: 4,
            title: 'Inventory-Management-System (Solo Project)',
            description: 'This is a React-based web application that allows users to manage their inventory and track their stock.',
            image: inventoryApp, // Using local image
            link: 'https://ljg.netlify.app/'
        },
        {
            id: 5,
            title: 'Resource-management-simulation (Solo Project)',
            description: 'This is a simple React-based team building and resource management game where user assemble a squad of fighters within a budget, optimizing for strength and agility.',
            image: zombieFighters, // Using local image
            link: 'https://zombiecart.netlify.app/'
        }
    ])
    const [InstructionalDesignPortfolio, setInstructionalDesignPortfolio] = useState([
        {
            id: 1,
            title: 'Instructional Design',
            description: 'This is a compilation of instructional design projects that I have worked on.',
            image: instructionDesign,
            link: 'https://docs.google.com/document/d/1qFMNREoBmmV1rMbrwgCVtZIRtMWFPe2W-b0kkrqxumY/edit?tab=t.0'
        }
    ])

    return (
        <div className="portfolio-container">
            <h2>Full Stack Portfolio</h2>
            <div className="portfolio-grid">
                {fullStackPortfolio.map((project) => (
                    <div key={project.id} className="portfolio-item">
                        <div className="image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <p className="image-caption">Click to view project</p>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>

            <h2>Instructional Design Portfolio</h2>
            <div className="portfolio-grid">
                {InstructionalDesignPortfolio.map((project) => (
                    <div key={project.id} className="portfolio-item">
                        <div className="image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <p className="image-caption">Click to view project</p>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio