'use client';

import { motion } from "framer-motion";
import { FaPalette, FaHeart, FaLeaf } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */

// Metadata moved to layout.tsx since this is now a Client Component

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-dark-teal">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-brand-bold text-brand-light-pink mb-6">
            About Me
          </h1>
          <p className="text-xl text-brand-light-pink/80 max-w-3xl mx-auto font-brand-elegant">
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
            <div className="bg-brand-dark-teal/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-brand-vibrant-pink/30">
              <h2 className="text-3xl font-brand-bold text-brand-light-pink mb-6 flex items-center gap-3">
                <FaPalette className="text-brand-vibrant-pink" />
                My Creative Journey
              </h2>
              <div className="prose prose-lg max-w-none text-brand-light-pink/80 font-brand-elegant">
                <p className="mb-6">
                  My name is Toska, and I&apos;m a passionate artist who finds joy in creating beautiful, 
                  functional pieces that bring warmth and character to everyday life. My journey began 
                  with a simple desire to make something with my own hands – something that would 
                  carry a piece of my soul.
                </p>
                <p className="mb-6">
                  What started as a hobby has evolved into a deep love for two distinct yet 
                  complementary crafts: ceramics and handbag design. Each piece I create tells 
                  a story, whether it&apos;s a hand-thrown ceramic bowl that will cradle your morning 
                  coffee or a carefully stitched handbag that will accompany you on life&apos;s adventures.
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
            <div className="bg-brand-dark-teal/30 backdrop-blur-sm rounded-2xl p-8 border border-brand-vibrant-pink/20">
              <h2 className="text-3xl font-brand-bold text-brand-light-pink mb-6 flex items-center gap-3">
                <FaHeart className="text-brand-vibrant-pink" />
                My Philosophy
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-brand-bold text-brand-light-pink mb-4">Sustainable Craft</h3>
                  <p className="text-brand-light-pink/80 mb-6 font-brand-elegant">
                    I'm committed to sustainable practices, using locally sourced materials 
                    whenever possible and creating pieces that are built to last. Every item 
                    is designed to age gracefully and become more beautiful with time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-brand-bold text-brand-light-pink mb-4">Handmade Quality</h3>
                  <p className="text-brand-light-pink/80 mb-6 font-brand-elegant">
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
            <div className="bg-brand-dark-teal/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-vibrant-pink/20">
              <h2 className="text-3xl font-brand-bold text-brand-light-pink mb-6 flex items-center gap-3">
                <FaLeaf className="text-brand-vibrant-pink" />
                My Process
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-vibrant-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-vibrant-pink/40">
                    <span className="text-2xl font-bold text-brand-light-pink">1</span>
                  </div>
                  <h3 className="text-lg font-brand-bold text-brand-light-pink mb-2">Inspiration</h3>
                  <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                    I draw inspiration from nature, textures, and the simple beauty of everyday moments.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-vibrant-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-vibrant-pink/40">
                    <span className="text-2xl font-bold text-brand-light-pink">2</span>
                  </div>
                  <h3 className="text-lg font-brand-bold text-brand-light-pink mb-2">Creation</h3>
                  <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                    Each piece is carefully handcrafted with attention to detail and quality.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-vibrant-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-vibrant-pink/40">
                    <span className="text-2xl font-bold text-brand-light-pink">3</span>
                  </div>
                  <h3 className="text-lg font-brand-bold text-brand-light-pink mb-2">Connection</h3>
                  <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
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
            <div className="bg-gradient-to-r from-brand-dark-teal/40 to-brand-dark-teal/60 rounded-2xl p-8 border border-brand-vibrant-pink/30">
              <h2 className="text-2xl font-brand-bold text-brand-light-pink mb-4">
                Let's Create Together
              </h2>
              <p className="text-brand-light-pink/80 mb-6 max-w-2xl mx-auto font-brand-elegant">
                I'd love to hear from you! Whether you're interested in a custom piece, 
                have questions about my work, or just want to say hello, I'm always happy to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/work"
                  className="bg-brand-vibrant-pink text-white px-8 py-3 rounded-full hover:bg-brand-vibrant-pink/90 transition-colors font-brand-bold"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="bg-brand-dark-teal/60 text-brand-light-pink px-8 py-3 rounded-full hover:bg-brand-dark-teal/80 transition-colors font-brand-bold border border-brand-vibrant-pink/50"
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
