import {useState} from 'react'
import './Portfolio.css'

function Portfolio() {
    const [fullStackPortfolio, setFullStackPortfolio] = useState([
        {
            id: 1,
            title: 'LedgerLine',
            description: 'LedgerLine is a python-Django web application that allows users to manage their finances and track their income and expenses.',
            image: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            id: 2,
            title: 'Visdom-Dev',
            description: 'This is a React-based service application that allows user to understand the services Visdom has to offer and they could be reached for biusiness patronage.',
            image: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            id: 3,
            title: 'Scrabbled_D_word',
            description: 'This is a JavaScript-based word game that allows users improve there vocabulary and spelling especially for kids between the ages of 5-10.',
            image: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            id: 4,
            title: 'Inventory-Management-System',
            description: 'This is a React-based web application that allows users to manage their inventory and track their stock.',
            image: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            id: 5,
            title: 'resource-management-simulation',
            description: 'It is a simple React-based team building and resource management gmae where user assemble a squad of fighters within a budget, optimizing for strength and agility.',
            image: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        }
    ])
    const [InstructionalDesignPortfolio, setInstructionalDesignPortfolio] = useState([
        {
            id: 1,
            title: 'Instructional Design',
            description: 'This is a compilation of instructional design projects that I have worked on.',
            image: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        }
    ])
  return (
    <div>Portfolio</div>
  )
}

export default Portfolio