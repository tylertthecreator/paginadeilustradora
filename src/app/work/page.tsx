'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-brand-dark-teal w-full">
      {/* Main Work Title */}
      <section className="bg-brand-dark-teal py-20 w-full" style={{ paddingTop: '60px', paddingBottom: '40px', marginBottom: 0 }}>
        <div className="w-full" style={{ paddingLeft: '60px', paddingRight: '60px' }}>
          <h1 
            className="font-temeraire-display uppercase font-bold"
            style={{ fontSize: '60px', color: '#FF8A9D', textAlign: 'center' }}
          >
            My Work
          </h1>
        </div>
      </section>

      {/* Pink Skills Section */}
      <section className="w-full" style={{ backgroundColor: '#FF8A9D', paddingTop: '40px', paddingBottom: '40px', paddingLeft: '30px', paddingRight: '30px', margin: 0 }}>
        <div className="w-full">
          <div className="flex justify-center items-center gap-x-12">
            {[
              "graphic design", "illustration", "pottery", "macramé"
            ].map((tag, index, arr) => (
              <React.Fragment key={tag}>
                <span
                  className="skills-text lowercase"
                  style={{
                    fontSize: '40px',
                    lineHeight: '1',
                    color: '#FBEAD5'
                  }}
                >
                  {tag}
                </span>
                {index < arr.length - 1 && (
                  <span style={{ color: '#FBEAD5', fontSize: '20px' }}>•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design & Illustration Section */}
      <section className="bg-brand-dark-teal w-full" style={{ paddingTop: '80px', paddingBottom: '0px', paddingLeft: '60px', paddingRight: '60px' }}>
        <h2 
          className="font-temeraire-display font-bold"
          style={{ fontSize: '60px', color: '#FBEAD5', textAlign: 'left', marginBottom: '80px' }}
        >
          Graphic Design & Illustration
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-24">
          {Array.from({ length: 6 }, (_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square bg-gray-300 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                <span className="text-gray-600 font-medium">Placeholder {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pottery Section */}
      <section className="bg-brand-dark-teal w-full" style={{ paddingTop: '80px', paddingBottom: '0px', paddingLeft: '60px', paddingRight: '60px' }}>
        <h2 
          className="font-temeraire-display font-bold"
          style={{ fontSize: '60px', color: '#FBEAD5', textAlign: 'left', marginBottom: '80px' }}
        >
          Pottery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-24">
          {[
            "/images/work/pottery/IMG_2343.jpg",
            "/images/work/pottery/IMG_2353.jpg", 
            "/images/work/pottery/IMG_2477.jpg",
            "/images/work/pottery/IMG_2491.jpg",
            "/images/work/pottery/IMG_2497.jpg",
            "/images/work/pottery/IMG_2512.jpg"
          ].map((imagePath, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={imagePath}
                alt={`Pottery piece ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority={index < 3}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Macrame Section */}
      <section className="bg-brand-dark-teal w-full" style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '60px', paddingRight: '60px' }}>
        <h2 
          className="font-temeraire-display font-bold"
          style={{ fontSize: '60px', color: '#FBEAD5', textAlign: 'left', marginBottom: '80px' }}
        >
          Macramé
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-24">
          {[
            "/images/work/macrame/Toska-128.jpg",
            "/images/work/macrame/Toska-130.jpg",
            "/images/work/macrame/Toska-146.jpg",
            "/images/work/macrame/Toska-157.jpg",
            "/images/work/macrame/Toska-167.jpg",
            "/images/work/macrame/Toska-170.jpg"
          ].map((imagePath, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={imagePath}
                alt={`Macrame piece ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority={index < 3}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}