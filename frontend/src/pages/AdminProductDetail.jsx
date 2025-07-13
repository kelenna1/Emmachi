import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Phone, ArrowLeft, Package, Star, Save, Trash } from 'lucide-react';
import api from '../api';

const AdminProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'flour',
    description: '',
    price: 0.0,
    quantity_available: 0,
    image: null,
    rating: 4.5,
    is_active: true,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await api.get(`/admin/products/${id}/`);
        const data = response.data;
        setProduct(data);
        setFormData({
          name: data.name,
          category: data.category,
          description: data.description || '',
          price: data.price,
          quantity_available: data.quantity_available,
          image: null, // Reset image file input
          rating: data.rating || 4.5,
          is_active: data.is_active,
        });
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch product');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, type, checked, value, files } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? checked 
        : name === 'image' 
          ? (files && files[0]) || null
          : value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const formDataToSend = new FormData();

      // Append all fields except image
      Object.keys(formData).forEach(key => {
        if (key !== 'image' && formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Append image only if it's a new file
      if (formData.image instanceof File) {
        formDataToSend.append('image', formData.image);
      }

      const response = await api.patch(`/admin/products/${id}/`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setProduct(response.data);
      alert('Product updated successfully');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to update product');
      console.error('Error updating product:', err);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`/admin/products/${id}/`);
        alert('Product deleted successfully');
        navigate('/admin');
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to delete product');
        console.error('Error deleting product:', err);
      }
    }
  };

  const getImageUrl = () => {
    if (!product?.image) return 'https://via.placeholder.com/600x400';
    if (product.image.startsWith('http')) return product.image;
    return `${import.meta.env.VITE_API_URL}${product.image.startsWith('/') ? '' : '/'}${product.image}`;
  };

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
          <p className="text-gray-600">Please try again or check your permissions.</p>
          <Link to="/admin" className="mt-4 inline-block text-blue-500 hover:underline">
            Back to Admin Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/admin" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Admin Dashboard
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="h-96 overflow-hidden">
            <img
              src={getImageUrl()}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400';
              }}
            />
          </div>

          <form onSubmit={handleUpdate} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                  required
                >
                  <option value="flour">Flour</option>
                  <option value="sugar">Sugar</option>
                  <option value="salt">Salt</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price (₦)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  step="0.01"
                  className="mt-1 p-2 w-full border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity Available</label>
                <input
                  type="number"
                  name="quantity_available"
                  value={formData.quantity_available}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  max="5"
                  className="mt-1 p-2 w-full border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    name="is_active"
                    checked={formData.is_active}
                    onChange={handleChange}
                    className="mr-2 leading-tight"
                  />
                  Active
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full md:w-auto flex-1 bg-gradient-to-r from-yellow-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-green-600 transition-colors flex items-center justify-center"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="w-full md:w-auto flex-1 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center"
              >
                <Trash className="w-5 h-5 mr-2" />
                Delete
              </button>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetail;