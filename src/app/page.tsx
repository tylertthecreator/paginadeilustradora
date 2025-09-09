'use client';

import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { FaPalette, FaPencilAlt, FaCircle, FaRibbon, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark-teal w-full">
      {/* Hero Section - Centered like reference */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center px-4 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <BrandLogo size="xl" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/work"
              className="bg-brand-vibrant-pink text-white px-8 py-3 rounded-full hover:bg-brand-vibrant-pink/90 transition-colors font-brand-bold text-lg"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent text-brand-light-pink border-2 border-brand-light-pink px-8 py-3 rounded-full hover:bg-brand-light-pink hover:text-brand-dark-teal transition-colors font-brand-bold text-lg"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* My Work Section - Horizontal Scrolling Gallery */}
      <section className="py-32 md:py-40 bg-brand-dark-teal/50 w-full">
        <div className="container mx-auto px-4 w-full max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-brand-bold text-brand-vibrant-pink mb-4">
              My Work
            </h2>
            <p className="text-lg text-brand-light-pink/80 font-brand-elegant">
              A curated selection of my latest creations
            </p>
          </motion.div>

          {/* Horizontal Scrolling Gallery */}
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4">
              {/* Work Items */}
              {[
                { title: "Product Design", category: "Design", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center" },
                { title: "Print Design", category: "Print", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center" },
                { title: "Web Design", category: "Web", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center" },
                { title: "Animation", category: "Motion", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop&crop=center" },
                { title: "Mobile Design", category: "Mobile", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center" },
                { title: "Branding", category: "Brand", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center" },
                { title: "Illustration", category: "Art", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center" },
                { title: "Photography", category: "Photo", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                        <h3 className="text-3xl font-extrabold font-brand-bold">{item.title}</h3>
                        <p className="text-lg text-white/80 font-brand-elegant">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* See All Button */}
            <div className="text-center mt-12">
              <Link 
                href="/work"
                className="inline-flex items-center gap-2 bg-brand-vibrant-pink text-white px-6 py-3 rounded-full hover:bg-brand-vibrant-pink/90 transition-colors font-brand-bold"
              >
                See all
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills List Section */}
      <section 
        className="w-full"
        style={{ backgroundColor: '#e91e63', paddingTop: '40px', paddingBottom: '40px' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2"
        >
          {[
            "graphic design", "illustration", "pottery", "macramé"
          ].map((tag, index, arr) => (
            <React.Fragment key={tag}>
              <span className="text-[#1a4d3a] text-5xl font-bold lowercase tracking-wider">
                {tag}
              </span>
              {index < arr.length - 1 && (
                <span className="text-[#1a4d3a]/50 text-5xl">•</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-brand-dark-teal to-brand-dark-teal/80 w-full">
        <div className="container mx-auto px-4 text-center w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-brand-bold text-brand-light-pink mb-6">
              Ready to work together?
            </h2>
            <p className="text-xl text-brand-light-pink/80 font-brand-elegant mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. Get in touch to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand-vibrant-pink text-white px-8 py-4 rounded-full hover:bg-brand-vibrant-pink/90 transition-colors font-brand-bold text-lg"
              >
                Start a Project
              </Link>
              <Link 
                href="/about"
                className="bg-transparent text-brand-light-pink border-2 border-brand-light-pink px-8 py-4 rounded-full hover:bg-brand-light-pink hover:text-brand-dark-teal transition-colors font-brand-bold text-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}