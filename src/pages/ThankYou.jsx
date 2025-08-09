// src/pages/ThankYou.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Package, ArrowRight, Download } from 'lucide-react'
import Confetti from '../components/Confetti'

const ThankYou = () => {
  const [orderData, setOrderData] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Get order data from localStorage
    const lastOrder = localStorage.getItem('lastOrder')
    if (lastOrder) {
      setOrderData(JSON.parse(lastOrder))
      setShowConfetti(true)
      
      // Clear the order data after use
      setTimeout(() => {
        localStorage.removeItem('lastOrder')
      }, 5000)
    }
    
    // Stop confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000)
  }, [])

  const orderNumber = `TL${Date.now().toString().slice(-6)}`
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-gray-50"
    >
      <Confetti trigger={showConfetti} />
      
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl w-full"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="text-center mb-8"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600">
              Thank you for choosing Timberlark Studios. Your order has been successfully placed.
            </p>
          </motion.div>

          {/* Order Details */}
          {orderData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="card p-8 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
                <span className="text-sm text-gray-500">Order #{orderNumber}</span>
              </div>
              
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={orderData.product.image}
                    alt={orderData.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{orderData.product.name}</h3>
                    <p className="text-gray-600">Quantity: {orderData.quantity}</p>
                    <p className="text-lg font-bold text-primary-600">
                      ${orderData.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Delivery Information</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Estimated Delivery: {estimatedDelivery}</p>
                    <p>Shipping Method: Standard Delivery</p>
                    <p>Tracking info will be sent via email</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Method</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Credit Card ending in ****</p>
                    <p>Transaction ID: {orderNumber}</p>
                    <p>Payment Status: Completed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="card p-8 mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">What's Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Order Processing</h3>
                  <p className="text-sm text-gray-600">We'll prepare your furniture for shipment within 1-2 business days.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Shipping Notification</h3>
                  <p className="text-sm text-gray-600">You'll receive tracking information once your order ships.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Delivery & Setup</h3>
                  <p className="text-sm text-gray-600">Our delivery team will contact you to schedule a convenient delivery time.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <span>Continue Shopping</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.print()}
              className="flex-1 btn-secondary flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download Receipt</span>
            </motion.button>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-8 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-600 mb-4">
              Need help with your order? Our customer service team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@timberlarkstudios.com"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Email Support
              </a>
              <a
                href="tel:+15551234567"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Call: (555) 123-4567
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ThankYou