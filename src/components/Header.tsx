'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-creamy-white-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/" 
              className="text-3xl md:text-4xl font-handwritten text-vibrant-pink-600 hover:text-vibrant-pink-700 transition-colors duration-300"
            >
              Toska CR
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '/about', label: 'About' },
              { href: '/work', label: 'Work' },
              { href: '/shop', label: 'Shop' },
              { href: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  className="text-dark-teal-700 hover:text-vibrant-pink-600 transition-colors duration-300 font-medium text-lg uppercase tracking-wide relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vibrant-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-dark-teal-700 hover:text-vibrant-pink-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
