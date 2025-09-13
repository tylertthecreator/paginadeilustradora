'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ArtworkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
}

interface InteractiveCarouselProps {
  artwork: ArtworkItem[];
}

const placeholderColors = [
  'bg-brand-dark-teal',      // Dark green
  'bg-[#2C5F5D]',           // Lighter green
  'bg-brand-dark-teal',      // Dark green
  'bg-[#2C5F5D]',           // Lighter green
  'bg-brand-dark-teal',      // Dark green
  'bg-[#2C5F5D]',           // Lighter green
];

export default function InteractiveCarousel({ artwork }: InteractiveCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; // Fixed scroll amount (width of one item)
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full group">
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          scroll('left');
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-50 transition-all opacity-100 hover:opacity-80 cursor-pointer" 
        style={{ 
          color: '#FF8A9D'
        }}
        aria-label="Scroll left"
      >
        <FaArrowLeft size={48}/>
      </button>
      <div 
        ref={scrollContainerRef} 
        className="flex gap-0 overflow-x-auto overflow-y-hidden scroll-smooth py-4 scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {artwork.map((item, index) => (
          <div key={item.id} className="flex-shrink-0 w-80 h-80 flex items-center justify-center">
            <Link href={`/work/${item.id}`} className="group block w-full h-full">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          scroll('right');
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-50 transition-all opacity-100 hover:opacity-80 cursor-pointer" 
        style={{ 
          color: '#FF8A9D'
        }}
        aria-label="Scroll right"
      >
        <FaArrowRight size={48}/>
      </button>
    </div>
  );
}
