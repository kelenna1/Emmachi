import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone, Settings } from "lucide-react";
import logo from "../assets/emmachi.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
  ];

  // Check if user is authenticated (simplified check; integrate with ProtectedRoutes if needed)
  const isAuthenticated = !!localStorage.getItem('access_token');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Emmachi Imperial" className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">Emmachi Imperial</span>
              <span className="text-xs text-gray-600">Premium Food Ingredients</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-yellow-600 bg-yellow-50'
                    : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info and Admin Icon */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+234 803 428 2951</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>emmachi2025@gmail.com</span>
            </div>
            {isAuthenticated && (
              <Link
                to="/admin"
                className="ml-4 p-2 text-gray-600 hover:text-yellow-600 transition-colors"
                title="Go to Admin Dashboard"
              >
                <Settings className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="px-3 py-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 inline mr-2" />
                  +234 803 428 2951
                </div>
                <div className="px-3 py-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 inline mr-2" />
                  emmachi2025@gmail.com
                </div>
                {isAuthenticated && (
                  <Link
                    to="/admin"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-md mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="w-5 h-5 inline mr-2" />
                    Admin Dashboard
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;