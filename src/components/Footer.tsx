'use client';

import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
      </div>
    </footer>
  );
}
