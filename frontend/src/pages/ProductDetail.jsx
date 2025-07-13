import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowLeft, Package, Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/products/${id}/`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Product not found');
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Package className="w-16 h-16 text-gray-400 animate-pulse" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-red-500 mb-4" />
          <p className="text-lg text-gray-900">{error || 'Product not found'}</p>
          <p className="text-gray-600">Please check the product ID or try again later.</p>
          <Link to="/shop" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/shop" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Shop
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="h-96 overflow-hidden">
            <img
              src={product.image || 'https://via.placeholder.com/600x400'}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-sm text-gray-600 mt-1">Category: {product.category}</p>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{product.rating || 4.5}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">{product.description || 'No description available'}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-gray-900 font-semibold">Price:</p>
                <p className="text-xl text-gray-900">₦{product.price.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">In Stock:</p>
                <p className="text-gray-600">{product.quantity_available} units</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:+2348012345678`}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-green-600 transition-colors text-center inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call to Order
              </a>
              <Link
                to="/shop"
                className="flex-1 bg-yellow-50 text-yellow-700 px-6 py-3 rounded-lg font-medium hover:bg-yellow-100 transition-colors text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;