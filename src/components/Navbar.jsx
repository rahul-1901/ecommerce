import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Search, User, X, Menu } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleExcess = () => {
    if (!localStorage.getItem("userToken")) {
      toast.error("Login first...", { autoClose: 1000 })
    } else {
      navigate('/cart');
    }
  }

  const handleDashLogin = () => {
    if (localStorage.getItem("userToken")) {
      navigate('/dashBoard')
    } else {
      navigate('login')
    }
  }
  return (
    <div className='navbarBody w-full top-0 left-0 fixed z-9999'>
      <div className='navbarContent mx-auto shadow-md p-5 bg-white'>

        <div className='navbarLogo flex items-center md:px-10'>
          <Link to="/" className='logoName md:text-2xl text-3xl font-bold'>
            <span>PreMart</span>
          </Link>
        </div>

        <div className='navbarRoutes md:flex items-center text-xl hidden'>
          <Link to="/" className='routeMain'>
            Home
          </Link>
          <Link to="/allTrend" className='routeMain'>
            Collection
          </Link>
          <Link to="/about" className='routeMain'>
            About
          </Link>
        </div>

        <div className='shoppingIcons md:flex items-center text-xl hidden'>
          <Search />
          <button onClick={() => handleDashLogin()} className='cursor-pointer'>
            <User />
          </button>
          <button onClick={() => handleExcess()} className='cursor-pointer'>
            <ShoppingCart />
          </button>
        </div>

        <div className='flex md:hidden items-center'>
          <button onClick={() => { setIsOpen(!isOpen) }}>
            {isOpen ? <X className='h-8 w-8 z-1000' /> : <Menu className='h-8 w-8' />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed h-full md:hidden smallNavbar w-54"
          >
            <div className="text-xl smallContent md:hidden">
              <Link to="/" className="flex text-3xl mt-5 linkComponent" onClick={() => { setIsOpen(false) }}>
                Home
              </Link>
              <Link to="/allTrend" className="flex text-3xl linkComponent" onClick={() => { setIsOpen(false) }}>
                Collection
              </Link>
              <Link to="/comming" className="flex text-3xl linkComponent" onClick={() => { setIsOpen(false) }}>
                New
              </Link>
              <Link to="/about" className="flex text-3xl linkComponent" onClick={() => { setIsOpen(false) }}>
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer />
    </div>
  )
}

export default Navbar;