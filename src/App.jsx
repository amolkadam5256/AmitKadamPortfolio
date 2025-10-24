import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import InquiryForm from './components/InquiryForm'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <InquiryForm/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App