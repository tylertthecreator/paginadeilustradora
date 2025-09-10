'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingBag } from 'react-icons/fa';
import BrandLogo, { ShoppingBagIcon } from './BrandLogo';

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
    <header className="bg-brand-dark-teal w-full sticky top-0 z-50">
      <div className="w-full flex items-center justify-between h-24" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link href="/" onClick={closeMobileMenu}>
            <BrandLogo size="lg" showText={false} />
          </Link>
        </div>

        {/* Desktop Navigation & Icons */}
        <div className="hidden md:flex items-center gap-16">
          <nav className="flex items-center gap-16">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors uppercase tracking-widest"
                style={{
                  color: '#FF8A9D',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  paddingTop: '1rem',
                  paddingBottom: '1rem'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Shopping Bag Icon */}
          <div style={{ paddingLeft: '60px' }}>
            <Link href="/shop">
              <div style={{ fontSize: '2.25rem' }}> {/* 36px */}
                <ShoppingBagIcon />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white hover:text-brand-vibrant-pink transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
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
            </motion.div>
          )}
        </AnimatePresence>
    </header>
  );
}
