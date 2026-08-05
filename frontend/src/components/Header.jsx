import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Settings, Phone } from "lucide-react";
import logo from "../assets/emmachi.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/shop" },
  ];

  const isAuthenticated = !!localStorage.getItem('access_token');
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  const whatsappLink = "https://wa.me/2348161220145?text=Hi%20Emmachi%20Imperial%2C%20I%27d%20like%20to%20place%20an%20order.";

  // Track scroll position for dynamic styling transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isTransparent 
          ? "bg-transparent border-b border-white/10 py-5" 
          : "bg-white/80 backdrop-blur-xl border-b border-green-900/10 shadow-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo with dynamic theme text color */}
          <Link to="/" className="flex items-center space-x-3 group decoration-none">
            <div className="p-1.5 rounded-xl bg-white/10 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="Emmachi Imperial" className="w-9 h-9" />
            </div>
            <div className="flex flex-col">
              <span 
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isTransparent ? "text-white" : "text-green-900"
                }`}
              >
                Emmachi Imperial
              </span>
              <span 
                className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                  isTransparent ? "text-yellow-300" : "text-green-700"
                }`}
              >
                Reliable Distribution
              </span>
            </div>
          </Link>

          {/* Centered Navigation Links with Rectangular Hovers */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isTransparent
                      ? isActive
                        ? "text-yellow-300 bg-white/10 border-b-2 border-yellow-300"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                      : isActive
                        ? "text-emerald-800 bg-emerald-50 border-b-2 border-emerald-700"
                        : "text-gray-600 hover:text-emerald-800 hover:bg-emerald-50/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side: WhatsApp Order Action + Call Us */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+2348161220145"
              className={`flex items-center space-x-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all duration-300 decoration-none ${
                isTransparent
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-gray-300 text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 decoration-none"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Order Now</span>
            </a>

            {isAuthenticated && (
              <Link
                to="/admin"
                className={`p-2 rounded-full transition-colors ${
                  isTransparent 
                    ? "text-white/80 hover:text-white hover:bg-white/10" 
                    : "text-gray-600 hover:text-green-800 hover:bg-green-50"
                }`}
                title="Admin Dashboard"
              >
                <Settings className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all ${
              isTransparent 
                ? "text-white hover:bg-white/10" 
                : "text-green-900 hover:bg-green-50"
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-3 pb-4 space-y-2 bg-white rounded-2xl shadow-xl mt-3 border border-green-900/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                    location.pathname === item.href
                      ? 'text-green-800 bg-green-50'
                      : 'text-gray-700 hover:text-green-800 hover:bg-green-50/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-3 border-t border-gray-100 px-4 space-y-3">
                <a 
                  href="tel:+2348161220145" 
                  className="flex items-center text-sm font-semibold text-gray-700 hover:text-green-800 no-underline"
                >
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  +234 816 122 0145
                </a>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold shadow-md transition-all no-underline"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Order on WhatsApp</span>
                </a>

                {isAuthenticated && (
                  <Link
                    to="/admin"
                    className="flex items-center text-sm font-semibold text-gray-700 hover:text-green-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="w-4 h-4 mr-2" />
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