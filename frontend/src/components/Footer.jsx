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
              restaurants, and food manufacturers with quality products for over 10 years.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">
                    +234 816 122 0145,<br/>
                    </span>
                </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">emmachi2025@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5" />
                <span className="text-sm">
                  123 Industrial Estate,<br />
                  Ikeja, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Mon - Fri: 8AM - 6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Our Products</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Partners</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Emmachi Imperial. All rights reserved. | Proudly serving Nigeria's food industry.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
