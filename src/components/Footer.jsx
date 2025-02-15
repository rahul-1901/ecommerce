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

const Footer = () => {
    return (
        <div className="flex flex-col mt-30">
            <div className="flex-grow"></div>
            <footer className="bg-gray-900 text-gray-300">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* About Section */}
                        <div className='lg:ml-10'>
                            <h4 className="text-xl font-bold text-white mb-4">PreMart</h4>
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
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="hover:text-blue-400 transition-colors">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Shop Now</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <MapPin size={20} />
                                    <span>123 Commerce St, Shopping City, SC 12345</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={20} />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={20} />
                                    <span>support@premart.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm">
                                © 2024 PreMart. All rights reserved.
                            </p>
                            <div className="flex gap-6 text-sm">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer