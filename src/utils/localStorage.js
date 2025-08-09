// src/utils/localStorage.js
// Products management
export const getStoredProducts = () => {
  try {
    const stored = localStorage.getItem('timberlark_products')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading products from localStorage:', error)
    return []
  }
}

export const saveProducts = (products) => {
  try {
    localStorage.setItem('timberlark_products', JSON.stringify(products))
  } catch (error) {
    console.error('Error saving products to localStorage:', error)
  }
}

// Reviews management
export const getStoredReviews = () => {
  try {
    const stored = localStorage.getItem('timberlark_reviews')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading reviews from localStorage:', error)
    return []
  }
}

export const saveReviews = (reviews) => {
  try {
    localStorage.setItem('timberlark_reviews', JSON.stringify(reviews))
  } catch (error) {
    console.error('Error saving reviews to localStorage:', error)
  }
}

// First visit tracking
export const checkFirstVisit = () => {
  try {
    const hasVisited = localStorage.getItem('timberlark_visited')
    if (!hasVisited) {
      localStorage.setItem('timberlark_visited', 'true')
      return true
    }
    return false
  } catch (error) {
    console.error('Error checking first visit:', error)
    return false
  }
}

// Cart management (future feature)
export const getCart = () => {
  try {
    const stored = localStorage.getItem('timberlark_cart')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading cart from localStorage:', error)
    return []
  }
}

export const saveCart = (cart) => {
  try {
    localStorage.setItem('timberlark_cart', JSON.stringify(cart))
  } catch (error) {
    console.error('Error saving cart to localStorage:', error)
  }
}

export const addToCart = (product, quantity = 1) => {
  try {
    const cart = getCart()
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({ ...product, quantity })
    }
    
    saveCart(cart)
    return cart
  } catch (error) {
    console.error('Error adding to cart:', error)
    return []
  }
}

export const removeFromCart = (productId) => {
  try {
    const cart = getCart().filter(item => item.id !== productId)
    saveCart(cart)
    return cart
  } catch (error) {
    console.error('Error removing from cart:', error)
    return []
  }
}

export const clearCart = () => {
  try {
    localStorage.removeItem('timberlark_cart')
  } catch (error) {
    console.error('Error clearing cart:', error)
  }
}

// Wishlist management (future feature)
export const getWishlist = () => {
  try {
    const stored = localStorage.getItem('timberlark_wishlist')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading wishlist from localStorage:', error)
    return []
  }
}

export const saveWishlist = (wishlist) => {
  try {
    localStorage.setItem('timberlark_wishlist', JSON.stringify(wishlist))
  } catch (error) {
    console.error('Error saving wishlist to localStorage:', error)
  }
}

export const addToWishlist = (product) => {
  try {
    const wishlist = getWishlist()
    const exists = wishlist.find(item => item.id === product.id)
    
    if (!exists) {
      wishlist.push(product)
      saveWishlist(wishlist)
    }
    
    return wishlist
  } catch (error) {
    console.error('Error adding to wishlist:', error)
    return []
  }
}

export const removeFromWishlist = (productId) => {
  try {
    const wishlist = getWishlist().filter(item => item.id !== productId)
    saveWishlist(wishlist)
    return wishlist
  } catch (error) {
    console.error('Error removing from wishlist:', error)
    return []
  }
}
