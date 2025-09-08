'use client';

import { motion } from "framer-motion";
import { FaPalette, FaHeart, FaLeaf } from "react-icons/fa";

// Metadata moved to layout.tsx since this is now a Client Component

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-terracotta-600 mb-6">
            About Me
          </h1>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Welcome to my creative world where ceramics and handbags come together in perfect harmony
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Story Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-terracotta-100">
              <h2 className="text-3xl font-serif text-terracotta-600 mb-6 flex items-center gap-3">
                <FaPalette className="text-olive-600" />
                My Creative Journey
              </h2>
              <div className="prose prose-lg max-w-none text-sage-700">
                <p className="mb-6">
                  My name is Toska, and I'm a passionate artist who finds joy in creating beautiful, 
                  functional pieces that bring warmth and character to everyday life. My journey began 
                  with a simple desire to make something with my own hands – something that would 
                  carry a piece of my soul.
                </p>
                <p className="mb-6">
                  What started as a hobby has evolved into a deep love for two distinct yet 
                  complementary crafts: ceramics and handbag design. Each piece I create tells 
                  a story, whether it's a hand-thrown ceramic bowl that will cradle your morning 
                  coffee or a carefully stitched handbag that will accompany you on life's adventures.
                </p>
                <p className="mb-6">
                  I believe that beauty lies in imperfection, in the unique marks left by human hands, 
                  and in the organic flow of natural materials. My work is inspired by the earthy 
                  tones of nature, the gentle curves of the landscape, and the simple elegance of 
                  functional design.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Philosophy Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-sage-50 rounded-2xl p-8 border border-sage-200">
              <h2 className="text-3xl font-serif text-terracotta-600 mb-6 flex items-center gap-3">
                <FaHeart className="text-terracotta-500" />
                My Philosophy
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Sustainable Craft</h3>
                  <p className="text-sage-700 mb-6">
                    I'm committed to sustainable practices, using locally sourced materials 
                    whenever possible and creating pieces that are built to last. Every item 
                    is designed to age gracefully and become more beautiful with time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Handmade Quality</h3>
                  <p className="text-sage-700 mb-6">
                    Each piece is individually crafted by hand, ensuring that no two items 
                    are exactly alike. This uniqueness is what makes handmade art special – 
                    it carries the energy and intention of its maker.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-beige-50 rounded-2xl p-8 border border-beige-200">
              <h2 className="text-3xl font-serif text-terracotta-600 mb-6 flex items-center gap-3">
                <FaLeaf className="text-olive-600" />
                My Process
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-terracotta-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-sage-800 mb-2">Inspiration</h3>
                  <p className="text-sage-700 text-sm">
                    I draw inspiration from nature, textures, and the simple beauty of everyday moments.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-olive-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-sage-800 mb-2">Creation</h3>
                  <p className="text-sage-700 text-sm">
                    Each piece is carefully handcrafted with attention to detail and quality.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-sage-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-sage-800 mb-2">Connection</h3>
                  <p className="text-sage-700 text-sm">
                    I hope each piece brings joy and becomes a cherished part of your daily life.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-terracotta-50 to-sage-50 rounded-2xl p-8 border border-terracotta-200">
              <h2 className="text-2xl font-serif text-terracotta-600 mb-4">
                Let's Create Together
              </h2>
              <p className="text-sage-700 mb-6 max-w-2xl mx-auto">
                I'd love to hear from you! Whether you're interested in a custom piece, 
                have questions about my work, or just want to say hello, I'm always happy to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/work"
                  className="bg-terracotta-600 text-white px-8 py-3 rounded-full hover:bg-terracotta-700 transition-colors font-medium"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="bg-sage-600 text-white px-8 py-3 rounded-full hover:bg-sage-700 transition-colors font-medium"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
