'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface PhotoGridProps {
  images: string[];
  className?: string;
}

export default function AnimatedPhotoGrid({ images, className = "" }: PhotoGridProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Create a 4x4 grid with 16 positions
  const gridPositions = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className={`relative w-full h-96 md:h-[500px] ${className}`}>
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
        {gridPositions.map((position) => (
          <motion.div
            key={position}
            className="bg-gradient-to-br from-terracotta-100 to-sage-100 rounded-lg"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              delay: position * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Images */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1">
        {images.slice(0, 16).map((image, index) => {
          const isActive = index === currentImageIndex;
          
          return (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isActive ? 1 : 0.7,
                scale: isActive ? 1.05 : 0.95,
                rotate: isActive ? [0, 1, -1, 0] : 0,
                y: isActive ? [0, -2, 2, 0] : 0
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                zIndex: 10
              }}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12.5vw"
                priority={index < 4} // Prioritize first row for faster loading
              />
              
              {/* Overlay effect for active image */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 bg-terracotta-200 rounded-full"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-4 left-4 w-6 h-6 bg-sage-200 rounded-full"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-olive-200 rounded-full"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.5, 0.5, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}
