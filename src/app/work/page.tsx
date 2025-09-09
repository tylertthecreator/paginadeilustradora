'use client';

import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { Artwork } from '@/types/artwork';

const WorkGallery = dynamic(() => import('./WorkGallery'), {
  ssr: false,
  loading: () => <div className="text-center py-8">Loading gallery...</div>
});

// Metadata moved to layout.tsx since this is now a Client Component

export default function WorkPage() {
  const [artwork, setArtwork] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load artwork data
    const loadArtwork = async () => {
      try {
        const response = await fetch('/data/artwork.json');
        const data = await response.json();
        setArtwork(data.artwork);
      } catch (error) {
        console.error('Error loading artwork:', error);
        // Fallback to empty array
        setArtwork([]);
      } finally {
        setLoading(false);
      }
    };

    loadArtwork();
  }, []);

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

        {/* Interactive Gallery */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 border-4 border-terracotta-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-sage-600">Loading artwork...</p>
          </div>
        ) : (
          <WorkGallery artwork={artwork} />
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
