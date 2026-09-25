
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './assets/Home.jsx'
import Aboutus from './assets/Aboutus.jsx'
import Admission from './assets/Admission.jsx'
import Contact from './assets/Contact.jsx'
import Logout from './assets/Logout.jsx'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a" element={<Aboutus />} />
      <Route path="/b" element={<Contact />} />
      <Route path="/c" element={<Logout />} />
      <Route path="/d" element={<Admission />} />
    </Routes>

  </BrowserRouter>
)
