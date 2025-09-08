'use client';

import { motion } from "framer-motion";
import { FaEtsy, FaShoppingBag, FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-terracotta-600 mb-6">
            Shop
          </h1>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
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
          <div className="bg-gradient-to-br from-terracotta-50 to-sage-50 rounded-3xl p-8 md:p-12 border border-terracotta-200">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-terracotta-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEtsy className="text-white text-3xl" />
              </div>
              
              <h2 className="text-4xl font-serif text-terracotta-600 mb-6">
                Visit My Etsy Shop
              </h2>
              
              <p className="text-lg text-sage-700 mb-8 max-w-2xl mx-auto">
                All my handcrafted ceramics and bags are available for purchase through my Etsy store. 
                Each piece is carefully packaged and shipped with love.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaHeart className="text-olive-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-sage-800 mb-2">Handmade with Love</h3>
                  <p className="text-sage-600 text-sm">
                    Each piece is individually crafted with attention to detail and quality.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaStar className="text-sage-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-sage-800 mb-2">Unique Designs</h3>
                  <p className="text-sage-600 text-sm">
                    No two pieces are exactly alike, making each one truly special.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaShoppingBag className="text-beige-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-sage-800 mb-2">Easy Shopping</h3>
                  <p className="text-sage-600 text-sm">
                    Secure checkout and worldwide shipping through Etsy's platform.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://etsy.com/shop/toskacr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-terracotta-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-terracotta-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
          <h2 className="text-3xl font-serif text-terracotta-600 text-center mb-12">
            Shop by Category
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceramics */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-terracotta-100 hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-olive-100 to-terracotta-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-olive-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaShoppingBag className="text-olive-600 text-2xl" />
                    </div>
                    <p className="text-sage-600 font-medium">Ceramics Collection</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-sage-800 mb-3 group-hover:text-terracotta-600 transition-colors">
                    Handcrafted Ceramics
                  </h3>
                  <p className="text-sage-600 mb-4">
                    Beautiful hand-thrown pottery including bowls, mugs, vases, and decorative pieces. 
                    Each piece features unique glazes and organic shapes.
                  </p>
                  <a
                    href="https://etsy.com/shop/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-terracotta-600 hover:text-terracotta-700 font-medium"
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sage-100 hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-sage-100 to-beige-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sage-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaShoppingBag className="text-sage-600 text-2xl" />
                    </div>
                    <p className="text-sage-600 font-medium">Handbag Collection</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-sage-800 mb-3 group-hover:text-terracotta-600 transition-colors">
                    Artisan Handbags
                  </h3>
                  <p className="text-sage-600 mb-4">
                    Carefully crafted bags made from quality leather and canvas. 
                    From crossbody bags to totes, each piece is designed for both style and function.
                  </p>
                  <a
                    href="https://etsy.com/shop/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-terracotta-600 hover:text-terracotta-700 font-medium"
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
          <div className="bg-sage-50 rounded-2xl p-8 border border-sage-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-terracotta-600 mb-6">
                Custom Orders
              </h2>
              <p className="text-lg text-sage-700 mb-6">
                Looking for something specific? I love creating custom pieces tailored to your 
                preferences. Whether it's a particular color, size, or design, I'm happy to 
                work with you to create the perfect piece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-sage-600 text-white px-8 py-3 rounded-full hover:bg-sage-700 transition-colors font-medium"
                >
                  Request Custom Order
                </a>
                <a
                  href="/about"
                  className="bg-white text-sage-700 px-8 py-3 rounded-full hover:bg-sage-100 transition-colors font-medium border border-sage-300"
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
          <div className="bg-beige-50 rounded-2xl p-8 border border-beige-200">
            <h2 className="text-2xl font-serif text-terracotta-600 mb-4">
              Shipping & Care
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-sage-800 mb-2">Worldwide Shipping</h3>
                <p className="text-sage-600 text-sm">
                  I ship worldwide through Etsy's platform. Shipping costs and delivery times 
                  vary by location.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sage-800 mb-2">Careful Packaging</h3>
                <p className="text-sage-600 text-sm">
                  Each piece is carefully wrapped and packaged to ensure it arrives safely 
                  at your doorstep.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sage-800 mb-2">Care Instructions</h3>
                <p className="text-sage-600 text-sm">
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
