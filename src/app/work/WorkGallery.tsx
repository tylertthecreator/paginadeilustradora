'use client';

import { motion } from "framer-motion";
import { FaFilter, FaEye, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

interface ArtworkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
}

interface WorkGalleryProps {
  artwork: ArtworkItem[];
}

export default function WorkGallery({ artwork }: WorkGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArtwork = selectedCategory === 'all' 
    ? artwork 
    : artwork.filter(item => item.category === selectedCategory);

  return (
    <>
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
              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback for failed images */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-terracotta-100 to-sage-100 flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-terracotta-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaEye className="text-terracotta-600 text-xl" />
                    </div>
                    <p className="text-sage-600 text-sm">Image Loading...</p>
                  </div>
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
    </>
  );
}
