import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home';
import Men from "../src/pages/Men";
import Footer from './components/Footer';
import './App.css'
import Allitems from './pages/Allitems';
import CommingSoon from './components/ComingSoon';
import HideNavbar from "../src/components/HideNavbar";
import About from './pages/About';
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import NotFound from '../src/pages/NotFound';
import EachItem from '../src/pages/EachItem';
import ScrollToTop from "./components/ScrollToTop";
import Cart from "../src/pages/Cart";
import Payment from "../src/pages/Payment";
import FinalPayment from "../src/pages/FinalPayment";
import OrderPlaced from '../src/pages/OrderPlaced';
import DashBoard from '../src/pages/DashBoard';
import Watches from '../src/pages/Watches';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <HideNavbar>
          <Navbar />
        </HideNavbar>
        <Routes>
          <Route path="/" element={<Home />} caseSensitive></Route>
          <Route path="/Men" element={<Men />} caseSensitive></Route>
          <Route path="/item/:id" element={<EachItem />} caseSensitive></Route>
          <Route path="/allTrend" element={<Allitems />} caseSensitive></Route>
          <Route path="/comming" element={<CommingSoon />} caseSensitive></Route>
          <Route path="/about" element={<About />} caseSensitive></Route>
          <Route path="/login" element={<Login />} caseSensitive></Route>
          <Route path="/signUp" element={<SignUp />} caseSensitive></Route>
          <Route path="*" element={<NotFound />} caseSensitive></Route>
          <Route path="/cart" element={<Cart />} caseSensitive></Route>
          <Route path="/paymentDetails" element={<Payment />} caseSensitive></Route>
          <Route path="/finalPayment" element={<FinalPayment />} caseSensitive></Route>
          <Route path="/orderPlaced" element={<OrderPlaced />} caseSensitive></Route>
          <Route path="/dashBoard" element={<DashBoard/>} caseSensitive></Route>
          <Route path="/watches" element={<Watches/>} caseSensitive></Route>
        </Routes>
        <HideNavbar>
          <Footer />
        </HideNavbar>
      </Router>
    </>
  )
}

export default App
