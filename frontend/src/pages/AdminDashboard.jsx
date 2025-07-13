import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Edit, Plus, Trash } from 'lucide-react';
import api from '../api';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'flour',
    description: '',
    price: 0.0,
    quantity_available: 0,
    image: null,
    rating: 4.5,
    is_active: true,
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) throw new Error('Authentication required');

        const response = await api.get('/admin/products/');
        if (!response.data) throw new Error('No products found');
        setProducts(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : name === 'image' ? files[0] : value,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in newProduct) {
      if (newProduct[key] !== null) {
        formData.append(key, newProduct[key]);
      }
    }

    try {
      const response = await api.post('/admin/products/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setProducts([...products, response.data]);
      setShowAddForm(false);
      setNewProduct({
        name: '',
        category: 'flour',
        description: '',
        price: 0.0,
        quantity_available: 0,
        image: null,
        rating: 4.5,
        is_active: true,
      });
      if (fileInputRef.current) fileInputRef.current.value = null;
      setMessage('Product created successfully');
      setSuccess(true);
    } catch (err) {
      setMessage(err.message || 'Failed to create product');
      setSuccess(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`/admin/products/${id}/`);
        setProducts(products.filter((product) => product.id !== id));
        setMessage('Product soft-deleted successfully');
        setSuccess(true);
      } catch (err) {
        setMessage(err.message || 'Failed to delete product');
        setSuccess(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Package className="w-16 h-16 text-gray-400 animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-red-500 mb-4" />
          <p className="text-lg text-gray-900">{error}</p>
          <p className="text-gray-600">Please log in or try again later.</p>
          <Link to="/login" className="mt-4 inline-block text-blue-500 hover:underline">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage all products below.</p>
              </div>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                {showAddForm ? 'Cancel' : 'Add Product'}
              </button>
            </div>

            {showAddForm && (
              <form onSubmit={handleCreate} className="mb-6 p-4 bg-gray-50 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={newProduct.name}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                      name="category"
                      value={newProduct.category}
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
                      value={newProduct.description}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price (₦)</label>
                    <input
                      type="number"
                      name="price"
                      value={newProduct.price}
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
                      value={newProduct.quantity_available}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                      ref={fileInputRef}
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
                      value={newProduct.rating}
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
                        checked={newProduct.is_active}
                        onChange={handleChange}
                        className="mr-2 leading-tight"
                      />
                      Active
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Save New Product
                </button>
                {message && (
                  <p className={`text-sm mt-2 ${success ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                  </p>
                )}
              </form>
            )}

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border-b">ID</th>
                    <th className="p-3 border-b">Name</th>
                    <th className="p-3 border-b">Category</th>
                    <th className="p-3 border-b">Price (₦)</th>
                    <th className="p-3 border-b">Quantity</th>
                    <th className="p-3 border-b">Image</th>
                    <th className="p-3 border-b">Rating</th>
                    <th className="p-3 border-b">Active</th>
                    <th className="p-3 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{product.id}</td>
                      <td className="p-3">{product.name}</td>
                      <td className="p-3">{product.category}</td>
                      <td className="p-3">{Number(product.price).toFixed(2)}</td>
                      <td className="p-3">{product.quantity_available}</td>
                      <td className="p-3">
                        {product.image ? (
                          <img
                            src={
                              product.image.startsWith('http')
                                ? product.image
                                : `${process.env.REACT_APP_API_URL}${product.image}`
                            }
                            alt={product.name}
                            className="w-16 h-16 object-cover"
                          />
                        ) : (
                          'No Image'
                        )}
                      </td>
                      <td className="p-3">{product.rating}</td>
                      <td className="p-3">{product.is_active ? 'Yes' : 'No'}</td>
                      <td className="p-3 flex space-x-2">
                        <Link
                          to={`/admin/product/${product.id}`}
                          className="inline-flex items-center px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="inline-flex items-center px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                          <Trash className="w-4 h-4 mr-1" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {products.length === 0 && (
              <p className="text-center text-gray-600 py-4">No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
