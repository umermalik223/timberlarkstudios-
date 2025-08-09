// src/components/Confetti.jsx
import React, { useEffect } from 'react'
import confetti from 'canvas-confetti'

const Confetti = ({ trigger = false, duration = 3000 }) => {
  useEffect(() => {
    if (trigger) {
      const interval = setInterval(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a67255', '#d5b2a5', '#f2e8e5']
        })
      }, 250)

      setTimeout(() => clearInterval(interval), duration)
    }
  }, [trigger, duration])

  return null
}

export default Confetti
