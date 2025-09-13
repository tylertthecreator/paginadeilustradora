'use client';

import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
}

export default function BrandLogo({ size = 'md', showText = true }: BrandLogoProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
    '2xl': 'text-6xl'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const logoSize = {
    sm: 40,
    md: 48,
    lg: 64,
    xl: 80,
    '2xl': 96
  };

  return (
    <div className="flex items-center gap-3">
      {/* Actual Logo Image */}
      <div className="relative">
        <Image
          src="/images/logo/toska_logo.png"
          alt="Toska CR Logo"
          width={logoSize[size]}
          height={logoSize[size]}
          className="object-contain"
          priority
        />
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
    <div className="relative p-2 hover:opacity-80 transition-opacity duration-300">
      <Image
        src="/images/icons/shop_bag.png"
        alt="Shopping Bag"
        width={64}
        height={64}
        className="object-contain"
      />
      {/* Optional notification dot */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-vibrant-pink rounded-full"></div>
    </div>
  );
}
