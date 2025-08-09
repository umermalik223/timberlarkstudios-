// src/components/WelcomeModal.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'

const WelcomeModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary-600" />
          </div>
          
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Welcome to Timberlark Studios
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Discover our curated collection of luxury furniture pieces, designed to transform your space into a beautiful home.
          </p>
          
          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="w-full btn-primary"
            >
              Explore Collection
            </motion.button>
            
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              Skip for now
            </button>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
      </motion.div>
    </motion.div>
  )
}

export default WelcomeModal
