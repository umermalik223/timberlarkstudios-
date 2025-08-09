// src/pages/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Leaf, Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const timeline = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Founded by master craftsmen with a vision to create timeless furniture pieces.',
      image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&h=400&fit=crop'
    },
    {
      year: '2018',
      title: 'Expanding Horizons',
      description: 'Opened our first showroom and introduced sustainable manufacturing practices.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop'
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Received the "Best Luxury Furniture Brand" award from Design Excellence Council.',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop'
    },
    {
      year: '2024',
      title: 'Digital Innovation',
      description: 'Launched our online platform to bring luxury furniture to homes worldwide.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Passion for Craft',
      description: 'Every piece is created with genuine love and attention to detail by our skilled artisans.',
      color: 'text-red-600'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source eco-friendly materials and use sustainable practices in every step of our process.',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never compromise on quality and strive for perfection in every furniture piece.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in building lasting relationships with our customers and supporting local communities.',
      color: 'text-purple-600'
    }
  ]

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c9?w=400&h=400&fit=crop&crop=face',
      bio: 'With over 20 years in furniture design, Sarah leads our creative vision and ensures every piece meets our high standards.'
    },
    {
      name: 'David Chen',
      role: 'Master Craftsman',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'David brings traditional woodworking techniques to modern designs, creating furniture that stands the test of time.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Sustainability Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      bio: 'Emma ensures all our practices are environmentally responsible and our materials are ethically sourced.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Crafting Stories Through
              <span className="block text-primary-400">Timeless Design</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              For over a decade, Timberlark Studios has been creating furniture that tells stories, 
              builds memories, and transforms houses into homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Timberlark Studios was born from a simple belief: furniture should be more than functional. 
                  It should be beautiful, sustainable, and built to last generations. What started as a small 
                  workshop in 2015 has grown into a renowned furniture brand trusted by designers and 
                  homeowners worldwide.
                </p>
                <p>
                  Our journey began when our founder, Sarah Mitchell, noticed a gap in the market for 
                  furniture that combined traditional craftsmanship with contemporary design. She assembled 
                  a team of skilled artisans who shared her vision for creating pieces that would stand 
                  the test of time.
                </p>
                <p>
                  Today, every piece of Timberlark furniture is still handcrafted with the same attention 
                  to detail and passion that inspired our founding. We use only the finest materials, 
                  sustainable practices, and time-honored techniques to create furniture that you'll 
                  treasure for years to come.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=600&fit=crop"
                alt="Craftsman at work"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary-600/20 rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry recognition, here's how Timberlark Studios has evolved.
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-primary-600 mr-4">{item.year}</span>
                    <div className="h-px bg-primary-600 flex-1" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and every piece we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind every Timberlark creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Find Your Perfect Piece?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Discover our collection of handcrafted furniture and bring timeless elegance to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <span>Explore Collection</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
