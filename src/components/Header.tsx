'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
<<<<<<< HEAD
import { FaBars, FaTimes, FaShoppingBag } from 'react-icons/fa';
import BrandLogo, { ShoppingBagIcon } from './BrandLogo';
=======
import BrandLogo from './BrandLogo';
>>>>>>> f42d27adb31722162cba6080e3a97ecd433730e7

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { href: '/about', label: 'About Me' },
    { href: '/work', label: 'My Work' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
<<<<<<< HEAD
    <header className="bg-brand-dark-teal w-full sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Brand Logo - Edge left aligned */}
          <Link href="/" onClick={closeMobileMenu} className="flex-shrink-0">
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-16">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-brand-vibrant-pink transition-colors duration-300 text-base uppercase tracking-widest font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Shopping Bag Icon */}
          <div className="hidden md:block">
            <Link href="/shop">
              <ShoppingBagIcon />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-brand-vibrant-pink transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-brand-dark-teal/95 backdrop-blur-sm border-t border-brand-vibrant-pink/30 py-6">
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block px-4 py-3 text-white hover:text-brand-vibrant-pink hover:bg-brand-vibrant-pink/20 transition-colors duration-300 text-lg uppercase tracking-widest font-semibold rounded-lg mx-2"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile Shopping Bag */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navigationItems.length * 0.1 }}
                    className="px-4 py-3"
                  >
                    <Link
                      href="/shop"
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 text-white hover:text-brand-vibrant-pink hover:bg-brand-vibrant-pink/20 transition-colors duration-300 text-lg uppercase tracking-widest font-semibold rounded-lg p-3"
                    >
                      <FaShoppingBag className="text-xl" />
                      Shop
                    </Link>
                  </motion.div>
                </nav>
              </div>
=======
    <header className="bg-[#e91e63] w-full sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between h-24 px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation - Spread Wide */}
        <nav className="hidden md:flex items-center justify-evenly flex-1">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-[#1a4d3a] hover:text-[#1a4d3a]/70 transition-colors duration-300 font-brand-bold text-xl lg:text-2xl uppercase tracking-wider relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1a4d3a]/50 transition-all duration-300 group-hover:w-full"></span>
              </Link>
>>>>>>> f42d27adb31722162cba6080e3a97ecd433730e7
            </motion.div>
          ))}
        </nav>
        
        {/* Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0"
        >
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-[#1a4d3a]"
          >
            <BrandLogo size="lg" showText={false} />
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-[#1a4d3a] hover:text-[#1a4d3a]/70 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-[#1a4d3a]/20 bg-[#e91e63]"
          >
            <nav className="py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-4 text-[#1a4d3a] hover:text-white hover:bg-[#1a4d3a]/20 transition-colors duration-300 font-brand-bold text-xl uppercase tracking-wider"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
