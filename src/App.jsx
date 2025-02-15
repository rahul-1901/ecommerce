import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home';
import Men from "../src/pages/Men";
import SingleItem from "../src/pages/singleItem";
import Footer from './components/Footer';
import './App.css'
import Allitems from './pages/Allitems';
import CommingSoon from './components/ComingSoon';
import HideNavbar from "../src/components/HideNavbar";
import About from './pages/About';

function App() {

  return (
    <>
      <Router>
        <HideNavbar>
          <Navbar />
        </HideNavbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Men" element={<Men />}></Route>
          <Route path="/item/:id" element={<SingleItem />}></Route>
          <Route path="/allTrend" element={<Allitems />}></Route>
          <Route path="/comming" element={<CommingSoon />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        <HideNavbar>
          <Footer />
        </HideNavbar>
      </Router>
    </>
  )
}

export default App
