'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-creamy-white-50 via-creamy-white-100 to-sage-50"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-vibrant-pink-200 rounded-full opacity-20 animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-terracotta-200 rounded-full opacity-30 animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl mx-auto px-4"
        >
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-handwritten text-vibrant-pink-600 mb-6 leading-tight">
            Toska CR
          </h1>
          <p className="text-xl md:text-2xl text-dark-teal-700 mb-8 font-serif italic">
            Handcrafted ceramics & bags
          </p>
          <p className="text-lg text-dark-teal-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover unique, artistic pieces made with love and creativity. 
            Each piece tells a story of passion and dedication.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop" 
              className="px-8 py-4 bg-vibrant-pink-600 text-creamy-white-50 rounded-full hover:bg-vibrant-pink-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Shop Now
            </Link>
            <Link 
              href="/work" 
              className="px-8 py-4 border-2 border-vibrant-pink-600 text-vibrant-pink-600 rounded-full hover:bg-vibrant-pink-600 hover:text-creamy-white-50 transition-all duration-300 font-medium text-lg"
            >
              View Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Work Categories Section */}
      <section className="py-20 bg-creamy-white-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-dark-teal-800 mb-4">
              My Work
            </h2>
            <p className="text-lg text-dark-teal-600 max-w-2xl mx-auto">
              Explore my creative journey through different mediums and styles
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Ceramics", description: "Hand-thrown pottery & sculptural pieces", color: "terracotta" },
              { title: "Handbags", description: "Unique leather & fabric designs", color: "sage" },
              { title: "Illustration", description: "Digital & traditional artwork", color: "olive" },
              { title: "Print Design", description: "Custom graphics & branding", color: "beige" },
              { title: "Textiles", description: "Macramé & fiber art", color: "vibrant-pink" },
              { title: "Custom Work", description: "Bespoke commissioned pieces", color: "dark-teal" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-${item.color}-50 p-8 rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border border-${item.color}-100`}
              >
                <h3 className={`text-2xl font-serif text-${item.color}-800 mb-4`}>
                  {item.title}
                </h3>
                <p className={`text-${item.color}-600 leading-relaxed`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif text-dark-teal-800 mb-8">
              Skills & Techniques
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "hand-thrown ceramics", "leather working", "macramé", "illustration", 
                "digital design", "pottery glazing", "pattern making", "textile art"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 bg-vibrant-pink-100 text-vibrant-pink-700 rounded-full text-sm font-medium hover:bg-vibrant-pink-200 transition-colors cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
