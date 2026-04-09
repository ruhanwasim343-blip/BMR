import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Services from './pages/services'
import Framework from './pages/frameworks'
import Insights from './pages/insights'
import About from './pages/about'
import Contact from './pages/contact'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/frameworks' element={<Framework />} />
            <Route path='/insights' element={<Insights/>}/>
            <Route path='/contact' element={<Contact/>}/>

        </Routes>
    )
}

export default App