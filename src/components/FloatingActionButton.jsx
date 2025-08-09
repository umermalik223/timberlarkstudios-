// src/components/FloatingActionButton.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Mail, X } from 'lucide-react'

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    { icon: Phone, label: 'Call Us', action: () => window.open('tel:+15551234567') },
    { icon: Mail, label: 'Email', action: () => window.open('mailto:hello@timberlarkstudios.com') },
    { icon: MessageCircle, label: 'Chat', action: () => alert('Chat feature coming soon!') }
  ]

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={action.action}
                className="flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-full shadow-lg transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <action.icon size={20} className="text-primary-600" />
                <span className="text-sm font-medium">{action.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  )
}

export default FloatingActionButton
