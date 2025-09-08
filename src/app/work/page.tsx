'use client';

import { motion } from "framer-motion";
import { FaFilter, FaEye, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Placeholder data - this will be replaced with actual data from JSON files later
  const artwork = [
    {
      id: 1,
      title: "Terracotta Bowl Set",
      category: "ceramics",
      image: "/api/placeholder/400/400",
      description: "Hand-thrown ceramic bowls with natural terracotta finish"
    },
    {
      id: 2,
      title: "Sage Green Vase",
      category: "ceramics", 
      image: "/api/placeholder/400/400",
      description: "Elegant vase with organic curves and sage green glaze"
    },
    {
      id: 3,
      title: "Leather Crossbody Bag",
      category: "bags",
      image: "/api/placeholder/400/400", 
      description: "Handcrafted leather bag with brass hardware"
    },
    {
      id: 4,
      title: "Olive Pottery Plate",
      category: "ceramics",
      image: "/api/placeholder/400/400",
      description: "Dinner plate with olive green glaze and natural edge"
    },
    {
      id: 5,
      title: "Canvas Tote Bag",
      category: "bags",
      image: "/api/placeholder/400/400",
      description: "Sturdy canvas tote with leather handles"
    },
    {
      id: 6,
      title: "Beige Ceramic Mug",
      category: "ceramics",
      image: "/api/placeholder/400/400",
      description: "Coffee mug with warm beige glaze and comfortable handle"
    }
  ];

  const filteredArtwork = selectedCategory === 'all' 
    ? artwork 
    : artwork.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-terracotta-600 mb-6">
            My Work
          </h1>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            A collection of handcrafted ceramics and bags, each piece telling its own story
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 ${
                selectedCategory === 'all'
                  ? 'bg-terracotta-600 text-white'
                  : 'bg-white text-sage-700 hover:bg-terracotta-50 border border-terracotta-200'
              }`}
            >
              <FaFilter />
              All Work
            </button>
            <button
              onClick={() => setSelectedCategory('ceramics')}
              className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 ${
                selectedCategory === 'ceramics'
                  ? 'bg-terracotta-600 text-white'
                  : 'bg-white text-sage-700 hover:bg-terracotta-50 border border-terracotta-200'
              }`}
            >
              Ceramics
            </button>
            <button
              onClick={() => setSelectedCategory('bags')}
              className={`px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 ${
                selectedCategory === 'bags'
                  ? 'bg-terracotta-600 text-white'
                  : 'bg-white text-sage-700 hover:bg-terracotta-50 border border-terracotta-200'
              }`}
            >
              Handbags
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredArtwork.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-terracotta-100 hover:shadow-xl transition-shadow duration-300">
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-terracotta-100 to-sage-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-terracotta-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaEye className="text-terracotta-600 text-xl" />
                    </div>
                    <p className="text-sage-600 text-sm">Image Coming Soon</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-sage-800 group-hover:text-terracotta-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.category === 'ceramics' 
                        ? 'bg-olive-100 text-olive-700'
                        : 'bg-sage-100 text-sage-700'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sage-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <button className="w-full bg-terracotta-50 text-terracotta-700 py-2 px-4 rounded-lg hover:bg-terracotta-100 transition-colors font-medium flex items-center justify-center gap-2">
                    <FaEye />
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredArtwork.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaFilter className="text-sage-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-sage-800 mb-4">
              No items found
            </h3>
            <p className="text-sage-600 mb-6">
              Try selecting a different category to see more work.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="bg-terracotta-600 text-white px-6 py-3 rounded-full hover:bg-terracotta-700 transition-colors font-medium"
            >
              View All Work
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-sage-50 to-terracotta-50 rounded-2xl p-8 border border-sage-200">
            <h2 className="text-2xl font-serif text-terracotta-600 mb-4">
              Interested in a Custom Piece?
            </h2>
            <p className="text-sage-700 mb-6 max-w-2xl mx-auto">
              I love creating custom pieces that are perfectly suited to your style and needs. 
              Let's work together to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/shop"
                className="bg-terracotta-600 text-white px-8 py-3 rounded-full hover:bg-terracotta-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <FaShoppingBag />
                Visit Shop
              </a>
              <a
                href="/contact"
                className="bg-sage-600 text-white px-8 py-3 rounded-full hover:bg-sage-700 transition-colors font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
