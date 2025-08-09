// src/pages/Admin.jsx
import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Download, 
  LogOut, 
  Package, 
  MessageSquare,
  BarChart3,
  Users
} from 'lucide-react'
import { checkAdminAuth, removeAdminAuth } from '../utils/auth'
import { getStoredProducts, saveProducts, getStoredReviews, saveReviews } from '../utils/localStorage'
import { products as defaultProducts } from '../data/products'
import { reviews as defaultReviews } from '../data/reviews'
import toast from 'react-hot-toast'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [products, setProducts] = useState([])
  const [reviews, setReviews] = useState([])
  const [activeTab, setActiveTab] = useState('products')
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'seating',
    description: '',
    image: '',
    inStock: true
  })

  const [newReview, setNewReview] = useState({
    productId: '',
    name: '',
    rating: 5,
    comment: ''
  })

  useEffect(() => {
    const authStatus = checkAdminAuth()
    setIsAuthenticated(authStatus)
    
    if (authStatus) {
      loadData()
    }
  }, [])

  const loadData = () => {
    const storedProducts = getStoredProducts()
    const storedReviews = getStoredReviews()
    
    setProducts(storedProducts.length > 0 ? storedProducts : defaultProducts)
    setReviews(storedReviews.length > 0 ? storedReviews : defaultReviews)
  }

  const handleLogout = () => {
    removeAdminAuth()
    toast.success('Logged out successfully')
    window.location.href = '/'
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    
    if (!newProduct.name || !newProduct.price || !newProduct.description) {
      toast.error('Please fill in all required fields')
      return
    }

    const product = {
      id: Date.now(),
      ...newProduct,
      price: parseFloat(newProduct.price),
      featured: false,
      reviews: 0,
      materials: [],
      dimensions: ''
    }

    const updatedProducts = [...products, product]
    setProducts(updatedProducts)
    saveProducts(updatedProducts)
    
    setNewProduct({
      name: '',
      price: '',
      category: 'seating',
      description: '',
      image: '',
      inStock: true
    })
    setShowAddForm(false)
    toast.success('Product added successfully!')
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setNewProduct({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      description: product.description,
      image: product.image,
      inStock: product.inStock
    })
    setShowAddForm(true)
  }

  const handleUpdateProduct = (e) => {
    e.preventDefault()
    
    const updatedProducts = products.map(p => 
      p.id === editingProduct.id 
        ? { ...p, ...newProduct, price: parseFloat(newProduct.price) }
        : p
    )
    
    setProducts(updatedProducts)
    saveProducts(updatedProducts)
    
    setEditingProduct(null)
    setShowAddForm(false)
    setNewProduct({
      name: '',
      price: '',
      category: 'seating',
      description: '',
      image: '',
      inStock: true
    })
    toast.success('Product updated successfully!')
  }

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== id)
      setProducts(updatedProducts)
      saveProducts(updatedProducts)
      toast.success('Product deleted successfully!')
    }
  }

  const handleAddReview = (e) => {
    e.preventDefault()
    
    if (!newReview.productId || !newReview.name || !newReview.comment) {
      toast.error('Please fill in all required fields')
      return
    }

    const review = {
      id: Date.now(),
      ...newReview,
      productId: parseInt(newReview.productId),
      date: new Date().toISOString().split('T')[0],
      verified: true
    }

    const updatedReviews = [...reviews, review]
    setReviews(updatedReviews)
    saveReviews(updatedReviews)
    
    setNewReview({
      productId: '',
      name: '',
      rating: 5,
      comment: ''
    })
    toast.success('Review added successfully!')
  }

  const exportData = () => {
    const data = {
      products,
      reviews,
      exportDate: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `timberlark-data-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast.success('Data exported successfully!')
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  const tabs = [
    { id: 'products', name: 'Products', icon: Package, count: products.length },
    { id: 'reviews', name: 'Reviews', icon: MessageSquare, count: reviews.length },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">Manage your furniture store</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={exportData}
              className="flex items-center space-x-2 bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download size={20} />
              <span>Export Data</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Products', value: products.length, icon: Package, color: 'text-blue-600' },
            { label: 'Total Reviews', value: reviews.length, icon: MessageSquare, color: 'text-green-600' },
            { label: 'In Stock', value: products.filter(p => p.inStock).length, icon: Package, color: 'text-purple-600' },
            { label: 'Featured', value: products.filter(p => p.featured).length, icon: Package, color: 'text-orange-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.name}</span>
                {tab.count !== undefined && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'products' && (
          <div>
            {/* Add Product Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Products</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowAddForm(!showAddForm)
                  setEditingProduct(null)
                  setNewProduct({
                    name: '',
                    price: '',
                    category: 'seating',
                    description: '',
                    image: '',
                    inStock: true
                  })
                }}
                className="btn-primary flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Add Product</span>
              </motion.button>
            </div>

            {/* Add/Edit Product Form */}
            {showAddForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="card p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="seating">Seating</option>
                        <option value="tables">Tables</option>
                        <option value="lighting">Lighting</option>
                        <option value="storage">Storage</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Image URL
                      </label>
                      <input
                        type="url"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description *
                    </label>
                    <textarea
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="inStock"
                      checked={newProduct.inStock}
                      onChange={(e) => setNewProduct({ ...newProduct, inStock: e.target.checked })}
                      className="mr-2"
                    />
                    <label htmlFor="inStock" className="text-sm text-gray-700">
                      In Stock
                    </label>
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary"
                    >
                      {editingProduct ? 'Update Product' : 'Add Product'}
                    </motion.button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddForm(false)
                        setEditingProduct(null)
                      }}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Products List */}
            <div className="grid grid-cols-1 gap-4">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=100&h=100&fit=crop'}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.category}</p>
                        <p className="text-lg font-bold text-primary-600">${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEditProduct(product)}
                        className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <Edit size={16} />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
            </div>

            {/* Add Review Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 mb-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Review</h3>
              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product *
                    </label>
                    <select
                      value={newReview.productId}
                      onChange={(e) => setNewReview({ ...newReview, productId: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      <option value="">Select a product</option>
                      {products.map(product => (
                        <option key={product.id} value={product.id}>{product.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Customer Name *
                    </label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rating
                    </label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      {[5, 4, 3, 2, 1].map(rating => (
                        <option key={rating} value={rating}>{rating} Stars</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Comment *
                  </label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Add Review
                </motion.button>
              </form>
            </motion.div>

            {/* Reviews List */}
            <div className="space-y-4">
              {reviews.map((review, index) => {
                const product = products.find(p => p.id === review.productId)
                return (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="card p-6"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{review.name}</h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <motion.span
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.1 * i }}
                                className={`text-sm ${
                                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              >
                                ★
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          Product: {product ? product.name : 'Unknown Product'}
                        </p>
                        <p className="text-gray-700">{review.comment}</p>
                        <p className="text-sm text-gray-500 mt-2">{review.date}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Analytics</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-8 text-center"
            >
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Coming Soon</h3>
              <p className="text-gray-600">
                Advanced analytics and reporting features will be available in the next update.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Admin
