// src/App.jsx
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import WelcomeModal from './components/WelcomeModal'
import ScrollToTop from './components/ScrollToTop'
import FloatingActionButton from './components/FloatingActionButton'

// Pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Admin from './pages/Admin'
import ThankYou from './pages/ThankYou'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Utils
import { checkFirstVisit } from './utils/localStorage'

function App() {
  const [showWelcome, setShowWelcome] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if first visit
    const isFirstVisit = checkFirstVisit()
    if (isFirstVisit) {
      setShowWelcome(true)
    }
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000)
    
    // Keyboard shortcuts
    const handleKeyPress = (e) => {
      if (e.key === 'a' || e.key === 'A') {
        const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true'
        if (isLoggedIn) {
          window.location.href = '/admin'
        }
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center hero-gradient">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-display font-semibold text-primary-800">Timberlark Studios</h2>
          <p className="text-primary-600">Crafting luxury experiences...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 custom-cursor">
        <CustomCursor />
        <Toaster position="top-right" />
        <ScrollToTop />
        
        <AnimatePresence>
          {showWelcome && (
            <WelcomeModal onClose={() => setShowWelcome(false)} />
          )}
        </AnimatePresence>
        
        <Navbar />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
        <FloatingActionButton />
      </div>
    </Router>
  )
}

export default App
