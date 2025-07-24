import { useState } from 'react'
import Portfolio from './components/Portfolio'
import Heading from './components/Heading'
import About from './components/About'
import ResumeModal from './components/ResumeModal'
import './App.css'

function App() {


  return (
    <>
    <Heading />
    <About />
    <Portfolio />
    <ResumeModal/>
    </>
  )
}

export default App
