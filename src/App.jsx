// import { useState } from 'react'
import './App.css'
// import RootLayout from './components/RootLayout.jsx'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from "./pages/Home.jsx"
// import Footer from "./components/Footer.jsx"
import Shop from "./pages/Shop.jsx"
import Inquire from "./pages/Inquire.jsx"

function App() {

  return (
    <>
      <Router>
          <nav>
          <h1>Cat Montoya</h1>
            <ul>
              <li><NavLink to="/">PORTFOLIO</NavLink></li>
              <li><NavLink to ="/shop">SHOP</NavLink></li>
              <li><NavLink to="/inquire">INQUIRE</NavLink></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/inquire" element={<Inquire />} />
          </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  )
}

export default App
