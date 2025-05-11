import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-white border-r-[8px] border-r-transparent" />
              </div>
              <span className="text-xl font-bold text-white">ModernWeb</span>
            </div>
            <p className="text-sm max-w-xs">
              We build beautiful, responsive websites with a focus on user experience and performance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-400 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Web Design</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Web Development</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">E-commerce Solutions</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Digital Marketing</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>123 Web Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <a href="mailto:info@modernweb.com" className="hover:text-blue-400 transition-colors duration-300">info@modernweb.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {currentYear} ModernWeb Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;