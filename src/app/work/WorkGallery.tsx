'use client';

import { motion } from "framer-motion";
import { FaFilter, FaEye, FaShoppingBag, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { Artwork } from "@/types/artwork";

interface WorkGalleryProps {
  artwork: Artwork[];
}

export default function WorkGallery({ artwork }: WorkGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ceramics' | 'bags'>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

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

      {/* Gallery Grid - 4x5 responsive layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12"
      >
        {filteredArtwork.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedArtwork(item)}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-terracotta-100 hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 20vw"
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
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-sage-800 group-hover:text-terracotta-600 transition-colors truncate">
                    {item.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    item.category === 'ceramics' 
                      ? 'bg-olive-100 text-olive-700'
                      : 'bg-sage-100 text-sage-700'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <p className="text-sage-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-terracotta-600 font-semibold text-sm">
                    {item.price}
                  </span>
                  <button className="bg-terracotta-50 text-terracotta-700 py-1 px-3 rounded-lg hover:bg-terracotta-100 transition-colors font-medium flex items-center gap-1 text-sm">
                    <FaEye />
                    View
                  </button>
                </div>
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

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src={selectedArtwork.imageSrc}
                  alt={selectedArtwork.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-serif text-terracotta-600">
                      {selectedArtwork.title}
                    </h2>
                    <button
                      onClick={() => setSelectedArtwork(null)}
                      className="p-2 hover:bg-sage-100 rounded-full transition-colors"
                    >
                      <FaTimes className="text-sage-600" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedArtwork.category === 'ceramics' 
                        ? 'bg-olive-100 text-olive-700'
                        : 'bg-sage-100 text-sage-700'
                    }`}>
                      {selectedArtwork.category}
                    </span>
                    <span className="text-2xl font-bold text-terracotta-600">
                      {selectedArtwork.price}
                    </span>
                  </div>
                  
                  <p className="text-sage-700 mb-6 leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-sage-800">Dimensions:</span>
                      <span className="text-sage-600 ml-2">{selectedArtwork.dimensions}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-sage-800">Materials:</span>
                      <span className="text-sage-600 ml-2">{selectedArtwork.materials}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <a
                    href="https://etsy.com/shop/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-terracotta-600 text-white py-3 px-6 rounded-lg hover:bg-terracotta-700 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <FaShoppingBag />
                    Buy on Etsy
                  </a>
                  <button
                    onClick={() => setSelectedArtwork(null)}
                    className="px-6 py-3 border border-sage-300 text-sage-700 rounded-lg hover:bg-sage-50 transition-colors font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
