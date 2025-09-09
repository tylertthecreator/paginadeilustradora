'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import WorkGallery from "./WorkGallery";
import { artwork } from "@/data/artwork";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-brand-dark-teal w-full">
      <div className="container mx-auto px-4 py-16 w-full max-w-6xl text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-brand-bold text-brand-vibrant-pink mb-4">
            My Work
          </h1>
          <p className="text-lg text-brand-light-pink/80 font-brand-elegant max-w-2xl mx-auto">
            A collection of handcrafted ceramics and bags, each piece telling its own story
          </p>
        </motion.div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative mb-16">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-brand-bold">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* See All Button */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 bg-brand-vibrant-pink text-white px-6 py-3 rounded-full hover:bg-brand-vibrant-pink/90 transition-colors font-brand-bold">
              See all
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Skills Navigation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-brand-vibrant-pink rounded-2xl p-8 mb-12 shadow-lg"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "graphic design",
              "illustration", 
              "pottery",
              "macramé"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <span className="text-brand-dark-teal hover:text-brand-dark-teal/80 transition-colors duration-300 font-brand-bold text-xl uppercase tracking-wider">
                  {skill}
                </span>
                {index < 3 && (
                  <span className="mx-4 text-brand-dark-teal/60 text-2xl">•</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-brand-bold text-brand-light-pink mb-8">
            Skills & Expertise
          </h2>
          
          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "graphic design", "illustration", "pottery", "macramé",
              "branding", "web design", "print design", "photography"
            ].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-brand-dark-teal/40 text-brand-light-pink px-4 py-2 rounded-full text-sm font-brand-elegant hover:bg-brand-vibrant-pink/20 transition-colors duration-300 cursor-pointer"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Work Gallery Component */}
        <WorkGallery artwork={artwork} />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 py-16 bg-brand-dark-teal/40 rounded-2xl"
        >
          <h2 className="text-3xl font-brand-bold text-brand-light-pink mb-6">
            Ready to work together?
          </h2>
          <p className="text-lg text-brand-light-pink/80 font-brand-elegant mb-8 max-w-2xl mx-auto">
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
    </div>
  );
}