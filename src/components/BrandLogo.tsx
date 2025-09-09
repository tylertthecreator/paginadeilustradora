'use client';

import { motion } from 'framer-motion';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export default function BrandLogo({ 
  size = 'md', 
  showText = true, 
  className = '' 
}: BrandLogoProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Stylized 't' Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className={`${sizeClasses[size]} relative flex items-center justify-center`}
      >
        {/* Circular background */}
        <div className="absolute inset-0 rounded-full border-4 border-brand-vibrant-pink bg-brand-dark-teal"></div>
        
        {/* Stylized 't' */}
        <div className="relative z-10 text-brand-vibrant-pink text-4xl">
          <span className="brand-logo-t">t</span>
        </div>
      </motion.div>

      {/* Brand Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col"
        >
          {/* TOSKA - Bold, wide uppercase */}
          <h1 className={`${textSizeClasses[size]} font-brand-bold text-brand-vibrant-pink tracking-wider`}>
            TOSKA
          </h1>
          
          {/* ART PROJECT - Condensed uppercase */}
          <p className={`${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} font-brand-condensed text-brand-light-pink tracking-widest`}>
            Handcrafted ceramics & bags
          </p>
        </motion.div>
      )}
    </div>
  );
}

// Decorative 't' component for use in other contexts
export function StylizedT({ className = '' }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative text-brand-vibrant-pink font-brand-logo text-6xl font-bold">
        t
        {/* Dot above the 't' */}
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-brand-vibrant-pink rounded-full"></span>
        {/* Curved crossbar with flourish */}
        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-vibrant-pink transform -translate-y-1/2 rounded-full"></span>
        <span className="absolute top-1/2 -left-1 w-2 h-0.5 bg-brand-vibrant-pink transform -translate-y-1/2 rotate-12 rounded-full"></span>
      </span>
    </div>
  );
}
