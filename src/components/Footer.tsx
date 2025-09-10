'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaBehance, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { href: "https://instagram.com", icon: FaInstagram },
    { href: "https://behance.net", icon: FaBehance },
    { href: "https://linkedin.com", icon: FaLinkedinIn },
  ];

  const navLinks = [
    { href: "/work", label: "My Work" },
    { href: "/about", label: "About Me" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#0f2e1f] w-full">
      <div className="w-full py-16" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px' }}>
        <div className="flex flex-col md:flex-row justify-between items-center min-h-[120px]">
          {/* Socials */}
          <div className="text-left mb-8 md:mb-0">
            <h3 
              className="uppercase tracking-widest mb-6 font-sans"
              style={{ 
                fontSize: '30px',
                color: '#FF8A9D',
                fontWeight: '600'
              }}
            >
              Socials
            </h3>
            <div className="flex justify-center md:justify-start gap-6">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a 
                  key={href}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transition-colors"
                  style={{ color: '#FF8A9D' }}
                  aria-label={`Follow on ${href}`}
                >
                  <Icon size={36} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-right">
            {navLinks.map(({ href, label }) => (
              <Link 
                key={href} 
                href={href} 
                className="block mb-3 transition-colors uppercase tracking-widest font-sans"
                style={{ 
                  fontSize: '30px',
                  color: '#FF8A9D',
                  fontWeight: '600'
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div 
          className="text-center border-t"
          style={{ 
            borderColor: '#FF8A9D',
            color: '#FF8A9D',
            fontSize: '25px',
            paddingTop: '20px',
            paddingBottom: '20px',
            marginTop: '40px'
          }}
        >
          ALL RIGHTS RESERVED © 2025 TOSKA ART PROJECT
        </div>
      </div>
    </footer>
  );
}
