import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home';
import Men from "../src/pages/Men";
import SingleItem from "../src/pages/singleItem";
import Footer from './components/Footer';
import './App.css'
import Allitems from './pages/Allitems';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Men" element={<Men/>}></Route>
        <Route path="/item/:id" element={<SingleItem/>}></Route>
        <Route path="/allTrend" element={<Allitems/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
