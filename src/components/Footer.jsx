import React from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    CreditCard,
    Truck,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import urbanFooter from "../assets/urbanFooter.png";

const Footer = () => {
    return (
        <div className="flex flex-col">
            <div className="flex-grow"></div>
            <footer className="bg-gray-900 text-gray-300">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className='lg:ml-10'>
                            <img src={urbanFooter} className='ml-[-5px] h-12 w-43'/>
                            <p className="mb-4 text-sm leading-relaxed">
                                Your premier destination for quality products at competitive prices.
                                We're committed to providing an exceptional shopping experience.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    <Twitter size={20} />
                                </a>
                                <a href="https://www.instagram.com/rahulyadav_1916/?__pwa=1" target="_blank" className="hover:text-blue-400 transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://www.youtube.com/@Itsme23jjkk" target='_blank' className="hover:text-blue-400 transition-colors">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2 linksAll">
                                <li><Link to="/" className="lim hover:text-white transition-colors">Home</Link></li>
                                <li><Link to="/login" className="lim hover:text-white transition-colors">Login</Link></li>
                                <li><Link to="/allTrend" className="lim hover:text-white transition-colors">Collection</Link></li>
                                <li><Link to="/about" className="lim hover:text-white transition-colors">About Us</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <MapPin size={20} />
                                    <span><a href="https://www.google.com/maps/search/iit+jodhpur/@26.4750698,73.1156574,331m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" target="_blank" className='callNumber'>O3 Hostel, ROHIDA, IIT JODHPUR</a></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={20} />
                                    <span><a href="tel:+917852021098" className='callNumber'>+91 7852021098</a></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={20} />
                                    <span><a href="mailto: iitdelhi98@gmail.com" className='callNumber'>iitdelhi98@gmail.com</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm">
                                © 2024 <span className='font-semibold'>URBAN LUXE</span>. All rights reserved.
                            </p>
                            <div className="flex gap-6 text-sm">
                                <a className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                                <a className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
                                <a className="hover:text-white transition-colors cursor-pointer">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer