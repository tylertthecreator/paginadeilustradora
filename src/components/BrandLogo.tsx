'use client';

import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function BrandLogo({ size = 'md', showText = true }: BrandLogoProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex items-center gap-3">
      {/* Logo Circle with T */}
      <div className="relative">
        <div className={`${sizeClasses[size]} w-12 h-12 bg-brand-vibrant-pink rounded-full flex items-center justify-center shadow-lg`}>
          <span className="font-brand-logo text-white font-bold">T</span>
        </div>
        {/* Decorative ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-vibrant-pink to-brand-light-pink rounded-full opacity-30"></div>
      </div>
      
      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-brand-bold text-brand-primary-pink uppercase tracking-widest leading-tight`}>
            TOSKA
          </span>
          <span className={`${textSizeClasses[size]} font-brand-condensed text-brand-primary-pink/80 uppercase tracking-wider text-xs leading-tight`}>
            ART PROJECT
          </span>
        </div>
      )}
    </div>
  );
}

// Shopping bag icon component for header
export function ShoppingBagIcon() {
  return (
    <div className="relative p-2 text-brand-primary-pink hover:text-white transition-colors duration-300">
      <FaShoppingBag className="text-xl" />
      {/* Optional notification dot */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-vibrant-pink rounded-full"></div>
    </div>
  );
}