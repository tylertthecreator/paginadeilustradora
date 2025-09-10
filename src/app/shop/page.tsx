'use client';

import { motion } from "framer-motion";
import { FaEtsy, FaShoppingBag, FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-brand-dark-teal">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-brand-bold text-brand-light-pink mb-6">
            Shop
          </h1>
          <p className="text-xl text-brand-light-pink/80 max-w-3xl mx-auto font-brand-elegant">
            Discover my latest creations and find the perfect piece to add to your collection
          </p>
        </motion.div>

        {/* Etsy Shop Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-brand-dark-teal/40 to-brand-dark-teal/60 rounded-3xl p-8 md:p-12 border border-brand-vibrant-pink/30">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-brand-vibrant-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEtsy className="text-white text-3xl" />
              </div>
              
              <h2 className="text-4xl font-brand-bold text-brand-light-pink mb-6">
                Visit My Etsy Shop
              </h2>
              
              <p className="text-lg text-brand-light-pink/80 mb-8 max-w-2xl mx-auto font-brand-elegant">
                All my handcrafted ceramics and bags are available for purchase through my Etsy store. 
                Each piece is carefully packaged and shipped with love.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-vibrant-pink/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-brand-vibrant-pink/40">
                    <FaHeart className="text-brand-vibrant-pink text-xl" />
                  </div>
                  <h3 className="font-brand-bold text-brand-light-pink mb-2">Handmade with Love</h3>
                  <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                    Each piece is individually crafted with attention to detail and quality.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-vibrant-pink/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-brand-vibrant-pink/40">
                    <FaStar className="text-brand-vibrant-pink text-xl" />
                  </div>
                  <h3 className="font-brand-bold text-brand-light-pink mb-2">Unique Designs</h3>
                  <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                    No two pieces are exactly alike, making each one truly special.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-vibrant-pink/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-brand-vibrant-pink/40">
                    <FaShoppingBag className="text-brand-vibrant-pink text-xl" />
                  </div>
                  <h3 className="font-brand-bold text-brand-light-pink mb-2">Easy Shopping</h3>
                  <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                    Secure checkout and worldwide shipping through Etsy's platform.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://etsy.com/shop/toskacr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-vibrant-pink text-white px-8 py-4 rounded-full text-lg font-brand-bold hover:bg-brand-vibrant-pink/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaEtsy className="text-2xl" />
                Visit Etsy Shop
                <FaArrowRight />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Featured Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-brand-bold text-brand-light-pink text-center mb-12">
            Shop by Category
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceramics */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-brand-dark-teal/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-brand-vibrant-pink/30 hover:shadow-xl hover:border-brand-vibrant-pink/60 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-brand-vibrant-pink/20 to-brand-light-pink/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-vibrant-pink/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-vibrant-pink/40">
                      <FaShoppingBag className="text-brand-vibrant-pink text-2xl" />
                    </div>
                    <p className="text-brand-light-pink font-brand-bold">Ceramics Collection</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-brand-bold text-brand-light-pink mb-3 group-hover:text-brand-vibrant-pink transition-colors">
                    Handcrafted Ceramics
                  </h3>
                  <p className="text-brand-light-pink/80 mb-4 font-brand-elegant">
                    Beautiful hand-thrown pottery including bowls, mugs, vases, and decorative pieces. 
                    Each piece features unique glazes and organic shapes.
                  </p>
                  <a
                    href="https://etsy.com/shop/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-vibrant-pink hover:text-brand-vibrant-pink/80 font-brand-bold"
                  >
                    Shop Ceramics
                    <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Handbags */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-brand-dark-teal/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-brand-vibrant-pink/30 hover:shadow-xl hover:border-brand-vibrant-pink/60 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-brand-light-pink/20 to-brand-vibrant-pink/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-vibrant-pink/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-vibrant-pink/40">
                      <FaShoppingBag className="text-brand-vibrant-pink text-2xl" />
                    </div>
                    <p className="text-brand-light-pink font-brand-bold">Handbag Collection</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-brand-bold text-brand-light-pink mb-3 group-hover:text-brand-vibrant-pink transition-colors">
                    Artisan Handbags
                  </h3>
                  <p className="text-brand-light-pink/80 mb-4 font-brand-elegant">
                    Carefully crafted bags made from quality leather and canvas. 
                    From crossbody bags to totes, each piece is designed for both style and function.
                  </p>
                  <a
                    href="https://etsy.com/shop/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-vibrant-pink hover:text-brand-vibrant-pink/80 font-brand-bold"
                  >
                    Shop Handbags
                    <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Custom Orders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-brand-dark-teal/30 backdrop-blur-sm rounded-2xl p-8 border border-brand-vibrant-pink/20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-brand-bold text-brand-light-pink mb-6">
                Custom Orders
              </h2>
              <p className="text-lg text-brand-light-pink/80 mb-6 font-brand-elegant">
                Looking for something specific? I love creating custom pieces tailored to your 
                preferences. Whether it's a particular color, size, or design, I'm happy to 
                work with you to create the perfect piece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-brand-vibrant-pink text-white px-8 py-3 rounded-full hover:bg-brand-vibrant-pink/90 transition-colors font-brand-bold"
                >
                  Request Custom Order
                </a>
                <a
                  href="/about"
                  className="bg-brand-dark-teal/40 text-brand-light-pink px-8 py-3 rounded-full hover:bg-brand-dark-teal/60 transition-colors font-brand-bold border border-brand-vibrant-pink/30"
                >
                  Learn More About My Process
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Shipping Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-brand-dark-teal/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-vibrant-pink/20">
            <h2 className="text-2xl font-brand-bold text-brand-light-pink mb-4">
              Shipping & Care
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-brand-bold text-brand-light-pink mb-2">Worldwide Shipping</h3>
                <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                  I ship worldwide through Etsy's platform. Shipping costs and delivery times 
                  vary by location.
                </p>
              </div>
              <div>
                <h3 className="font-brand-bold text-brand-light-pink mb-2">Careful Packaging</h3>
                <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                  Each piece is carefully wrapped and packaged to ensure it arrives safely 
                  at your doorstep.
                </p>
              </div>
              <div>
                <h3 className="font-brand-bold text-brand-light-pink mb-2">Care Instructions</h3>
                <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                  Detailed care instructions are included with each purchase to help your 
                  pieces last for years to come.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
