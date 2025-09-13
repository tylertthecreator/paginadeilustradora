'use client';

import React from 'react';
import Link from 'next/link';
import InteractiveCarousel from '@/components/InteractiveCarousel';
import artwork from '@/data/artwork.json';

/* eslint-disable react/no-unescaped-entities */

export default function Home() {

  return (
    <div className="min-h-screen bg-brand-dark-teal w-full text-brand-light-text">
      <main>
        {/* Empty space below header, as per the reference image */}
        <div className="h-96" style={{ backgroundColor: '#0f2e1f' }}></div>


        {/* My Work Section - Matching reference exactly */}
        <section className="bg-brand-dark-teal py-20 w-full" style={{ paddingTop: '40px', marginBottom: 0 }}>
          <div className="w-full" style={{ paddingLeft: '60px', paddingRight: '60px' }}>
            <div className="text-center mb-12" style={{ paddingBottom: '40px' }}>
              <h2 
                className="font-brand-heading uppercase tracking-widest"
                style={{ 
                  fontSize: '60px',
                  color: '#FF8A9D',
                  fontWeight: 800
                }}
              >
                My Work
              </h2>
            </div>
            
            <InteractiveCarousel artwork={artwork} />
            
            <div className="text-center" style={{ marginTop: '80px', marginBottom: '40px' }}>
              <Link 
                href="/work"
                className="inline-block rounded-full font-brand-bold uppercase tracking-widest hover:bg-white transition-colors"
                style={{ 
                  borderRadius: '50px',
                  fontSize: '20px',
                  backgroundColor: '#FBEAD5',
                  color: '#1a4d3a',
                  padding: '20px 40px',
                  fontWeight: '900'
                }}
              >
                See All
              </Link>
            </div>
          </div>
        </section>

        {/* Skills List Section - Pink background with light cream text */}
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
                    <span 
                      className="skills-text text-brand-cream/50" 
                      style={{ 
                        fontSize: '40px',
                        lineHeight: '1'
                      }}
                    >•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}