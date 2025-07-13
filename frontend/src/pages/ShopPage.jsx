import React, { useState, useEffect } from 'react';
import { Phone, Search, Filter, Package, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import api from '../api';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'flour', name: 'Flour' },
    { id: 'sugar', name: 'Sugar' },
    { id: 'salt', name: 'Salt' },
    { id: 'other', name: 'Other' },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    const fetchProducts = async () => {
      try {
        setError(null);
        setLoading(true);
        const publicApi = axios.create({
          baseURL: api.defaults.baseURL,
        });
        const response = await publicApi.get('/products/');
        if (!response.data) throw new Error('No data received');
        setProducts(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getProductImage = (imagePath) => {
    if (!imagePath) return 'https://source.unsplash.com/600x400/?product';
    if (imagePath.startsWith('http')) return imagePath;
    if (imagePath.startsWith('/media/')) {
      return `${import.meta.env.VITE_API_URL}${imagePath}`;
    }
    return `${import.meta.env.VITE_API_URL}/media/${imagePath}`;
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <Package className="w-16 h-16 text-gray-400 animate-spin mb-4" />
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" data-aos="fade-in">
        <div className="text-center p-6">
          <Package className="w-16 h-16 text-red-500 mb-4 mx-auto" />
          <p className="text-lg text-gray-900 mb-2">{error}</p>
          <p className="text-gray-600 mb-4">Please try again later or contact support.</p>
          <Link 
            to="/" 
            className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-green-500 text-white rounded-lg hover:shadow-md transition-all"
            data-aos="fade-up"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-beige-200 via-green-700 to-gold-200 shadow-sm py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4" data-aos="fade-down">
            Premium Food Ingredients
          </h1>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
            Browse our comprehensive catalog of high-quality ingredients. Call to place your wholesale order today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Search & Filter */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-6 md:mb-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-9 md:pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <select
                className="px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm md:text-base"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl md:rounded-2xl shadow hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <div className="h-40 md:h-48">
                <img
                  src={getProductImage(product.image)}
                  alt={product.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://source.unsplash.com/600x400/?product';
                  }}
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <span className="text-xs text-gray-500 capitalize">{product.category}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs md:text-sm text-gray-600">{product.rating || 4.5}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                  {product.description || 'No description available'}
                </p>

                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <Package className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                    <span className="text-xs md:text-sm text-gray-600">
                      {product.quantity_available} unit{product.quantity_available !== 1 ? 's' : ''} in stock
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg md:text-xl font-bold text-gray-900">
                      ₦{Number(product.price).toFixed(2)}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">per unit</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                  <Link
                    to={`/shop/product/${product.id}`}
                    className="flex-1 text-center px-3 py-2 md:px-4 md:py-2 bg-yellow-50 text-yellow-700 text-xs md:text-sm rounded-lg font-medium hover:bg-yellow-100 transition-colors"
                  >
                    View Details
                  </Link>
                  <a
                    href="tel:+2348034282951"
                    className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-emerald-400 to-green-700 text-white text-xs md:text-sm font-semibold rounded-lg shadow hover:shadow-md transform hover:scale-[1.02] transition-all duration-200"
                  >
                    <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    Call to Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8 md:py-12" data-aos="fade-up">
            <Package className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-3 md:mb-4" />
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">No products found</h3>
            <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div 
          className="bg-gradient-to-r from-emerald-400 to-green-700 rounded-lg p-6 md:p-8 mt-8 md:mt-12 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Need Help Choosing Products?</h2>
          <p className="text-white/90 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
            Our expert team is ready to help you find the perfect ingredients for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="tel:+2348034282951"
              className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-white text-gray-900 text-sm md:text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              +234 803 428 2951
            </a>
            <a
              href="mailto:info@emmachi.ng"
              className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border-2 border-white text-white text-sm md:text-base font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;