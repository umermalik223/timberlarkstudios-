// src/components/ReviewCard.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle } from 'lucide-react'

const ReviewCard = ({ review, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-semibold text-gray-900">{review.name}</h4>
            {review.verified && (
              <CheckCircle size={16} className="text-green-500" />
            )}
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
      
      {review.verified && (
        <div className="mt-4 flex items-center text-green-600 text-sm">
          <CheckCircle size={14} className="mr-1" />
          Verified Purchase
        </div>
      )}
    </motion.div>
  )
}

export default ReviewCard
