import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Search, User, X, Menu } from 'lucide-react';
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            {/* <Link to="/Men" className='routeMain'>
              New
            </Link> */}
            <Link to="/about" className='routeMain'>
              About
            </Link>
          </div>

          <div className='shoppingIcons md:flex items-center text-xl hidden'>
            <Search />
            <User />
            <ShoppingCart />
          </div>

          <div className='flex md:hidden items-center'>
            <button onClick={() => { setIsOpen(!isOpen) }}>
              {isOpen ? <X className='h-8 w-8 z-1000' /> : <Menu className='h-8 w-8' />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="fixed h-full md:hidden smallNavbar w-54"
        >
          <div className="text-xl smallContent md:hidden">
            <Link to="/" className="flex text-3xl mt-5" onClick={() => { setIsOpen(false) }}>
              Home
            </Link>
            <Link to="/Men" className="flex text-3xl" onClick={() => { setIsOpen(false) }}>
              Collection
            </Link>
            <Link to="/Men" className="flex text-3xl" onClick={() => { setIsOpen(false) }}>
              New
            </Link>
            <Link to="/Men" className="flex text-3xl" onClick={() => { setIsOpen(false) }}>
              About
            </Link>
          </div>
        </motion.div>
        )}
      </div>
  )
}

export default Navbar;