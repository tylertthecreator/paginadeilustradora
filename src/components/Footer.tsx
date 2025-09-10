'use client';

<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaBehance, FaLinkedinIn } from 'react-icons/fa';
=======
import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
>>>>>>> f42d27adb31722162cba6080e3a97ecd433730e7

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
<<<<<<< HEAD
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
=======
    <footer className="bg-brand-dark-teal/80 border-t border-brand-vibrant-pink/30 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Left Section - SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <h3 className="text-2xl font-brand-bold text-brand-light-pink mb-4 uppercase tracking-wider">
              SOCIALS
            </h3>
            <div className="flex space-x-6">
              {[
                { href: 'https://instagram.com/toskacr', icon: FaInstagram, label: 'Instagram' },
                { href: 'https://linkedin.com/in/toskacr', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://toskacr.com', icon: FaGlobe, label: 'Website' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-light-pink/80 hover:text-brand-vibrant-pink transition-colors duration-300 p-2 rounded-full hover:bg-brand-vibrant-pink/20"
                  aria-label={`Follow on ${social.label}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Section - MY WORK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-end"
          >
            <h3 className="text-2xl font-brand-bold text-brand-light-pink mb-4 uppercase tracking-wider">
              MY WORK
            </h3>
            <div className="flex flex-col items-end space-y-2">
              {[
                { href: '/about', label: 'ABOUT ME' },
                { href: '/shop', label: 'SHOP' },
                { href: '/contact', label: 'CONTACT' }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-light-pink/80 hover:text-brand-vibrant-pink transition-colors duration-300 font-brand-bold text-lg uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-brand-vibrant-pink/30 text-center"
        >
          <p className="text-brand-light-pink/80 text-sm font-brand-bold uppercase tracking-wider">
            ALL RIGHTS RESERVED © {currentYear} TOSKA ART PROJECT
          </p>
        </motion.div>
>>>>>>> f42d27adb31722162cba6080e3a97ecd433730e7
      </div>
    </footer>
  );
}
