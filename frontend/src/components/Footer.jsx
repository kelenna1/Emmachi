import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/emmachi.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="Emmachi Imperial" className="w-10 h-10 object-contain" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">Emmachi Imperial</span>
                  <span className="text-xs text-gray-400">Reliable Distribution</span>
                </div>
              </Link>
            </div>

            <p className="text-gray-300 mb-4 max-w-md">
            Your trusted partner for premium food ingredients in Nigeria. Serving bakeries, 
            restaurants, and food manufacturers with wholesale supply for over 30 years.
          </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <span className="text-sm text-gray-300">
                  +234 816 122 0145
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <span className="text-sm text-gray-300">emmachi2025@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <span className="text-sm text-gray-300">
                  <span className="font-semibold text-gray-200 block mb-0.5">Iddo Outlet:</span>
                  Heyden trailer park, Iddo underbridge, Iddo, Lagos
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <span className="text-sm text-gray-300">
                  <span className="font-semibold text-gray-200 block mb-0.5">Suru Outlet:</span>
                  A40, army mammy market, Suru Alaba
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/shop" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><a href="https://wa.me/2348161220145" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">Order on WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Emmachi Imperial. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Proudly serving Nigeria's food industry since 1994.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
