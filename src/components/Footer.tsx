'use client';

import { FaInstagram, FaPinterest, FaLinkedin, FaEtsy } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-teal-50 border-t border-dark-teal-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-handwritten text-vibrant-pink-600 mb-4">
              Toska CR
            </h3>
            <p className="text-dark-teal-600 leading-relaxed">
              Creating unique handcrafted ceramics and bags that tell stories of passion and creativity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-serif text-dark-teal-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/work', label: 'My Work' },
                { href: '/shop', label: 'Shop' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-dark-teal-600 hover:text-vibrant-pink-600 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-serif text-dark-teal-800 mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { href: 'https://instagram.com/toskacr', icon: FaInstagram, label: 'Instagram' },
                { href: 'https://pinterest.com/toskacr', icon: FaPinterest, label: 'Pinterest' },
                { href: 'https://linkedin.com/in/toskacr', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://etsy.com/shop/toskacr', icon: FaEtsy, label: 'Etsy' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-teal-600 hover:text-vibrant-pink-600 transition-colors duration-300 p-2 rounded-full hover:bg-vibrant-pink-50"
                  aria-label={`Follow on ${social.label}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-dark-teal-200 text-center"
        >
          <p className="text-dark-teal-600 text-sm mb-2">
            © {currentYear} Toska CR. All rights reserved.
          </p>
          <p className="text-dark-teal-500 text-xs italic">
            Handcrafted with love and creativity
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
