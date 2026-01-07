import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/Home/NavBar'
import Footer from './components/Home/Footer'
import './index.css'

import Home from './pages/Home'
import Books from './pages/Books'
import Characters from './pages/Characters'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/characters' element={<Characters />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
