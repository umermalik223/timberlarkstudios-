// src/utils/auth.js
// Simple auth management for admin
export const checkAdminAuth = () => {
  try {
    return localStorage.getItem('isAdminLoggedIn') === 'true'
  } catch (error) {
    console.error('Error checking admin auth:', error)
    return false
  }
}

export const setAdminAuth = (isLoggedIn) => {
  try {
    localStorage.setItem('isAdminLoggedIn', isLoggedIn.toString())
  } catch (error) {
    console.error('Error setting admin auth:', error)
  }
}

export const removeAdminAuth = () => {
  try {
    localStorage.removeItem('isAdminLoggedIn')
  } catch (error) {
    console.error('Error removing admin auth:', error)
  }
}

// Session management
export const setSession = (key, value) => {
  try {
    localStorage.setItem(`timberlark_${key}`, JSON.stringify(value))
  } catch (error) {
    console.error(`Error setting session ${key}:`, error)
  }
}

export const getSession = (key) => {
  try {
    const stored = localStorage.getItem(`timberlark_${key}`)
    return stored ? JSON.parse(stored) : null
  } catch (error) {
    console.error(`Error getting session ${key}:`, error)
    return null
  }
}

export const removeSession = (key) => {
  try {
    localStorage.removeItem(`timberlark_${key}`)
  } catch (error) {
    console.error(`Error removing session ${key}:`, error)
  }
}

export const clearAllSessions = () => {
  try {
    const keys = Object.keys(localStorage)
    keys.forEach(key => {
      if (key.startsWith('timberlark_')) {
        localStorage.removeItem(key)
      }
    })
  } catch (error) {
    console.error('Error clearing all sessions:', error)
  }
}