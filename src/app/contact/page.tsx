'use client';

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaPinterest, FaLinkedin, FaEtsy } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later with EmailJS
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-terracotta-600 mb-6">
            Contact Me
          </h1>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            I'd love to hear from you! Whether you have questions about my work, 
            want to discuss a custom order, or just want to say hello.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-terracotta-100">
                <h2 className="text-2xl font-serif text-terracotta-600 mb-6">
                  Send Me a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-sage-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your project, question, or just say hello..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-terracotta-600 text-white py-3 px-6 rounded-lg hover:bg-terracotta-700 transition-colors font-medium text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-sage-50 rounded-2xl p-8 border border-sage-200">
                <h2 className="text-2xl font-serif text-terracotta-600 mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-terracotta-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Email</h3>
                      <p className="text-sage-600">hello@toskacr.com</p>
                      <p className="text-sm text-sage-500">I typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-olive-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-olive-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Phone</h3>
                      <p className="text-sage-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-sage-500">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-sage-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-1">Location</h3>
                      <p className="text-sage-600">Portland, Oregon</p>
                      <p className="text-sm text-sage-500">Available for local pickup</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-beige-50 rounded-2xl p-8 border border-beige-200">
                <h2 className="text-2xl font-serif text-terracotta-600 mb-6">
                  Follow My Journey
                </h2>
                
                <p className="text-sage-700 mb-6">
                  Stay updated with my latest creations, behind-the-scenes content, 
                  and creative process on social media.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://instagram.com/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-terracotta-50 transition-colors border border-terracotta-100"
                  >
                    <FaInstagram className="text-terracotta-600 text-xl" />
                    <span className="font-medium text-sage-700">Instagram</span>
                  </a>
                  
                  <a
                    href="https://pinterest.com/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-terracotta-50 transition-colors border border-terracotta-100"
                  >
                    <FaPinterest className="text-terracotta-600 text-xl" />
                    <span className="font-medium text-sage-700">Pinterest</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-terracotta-50 transition-colors border border-terracotta-100"
                  >
                    <FaLinkedin className="text-terracotta-600 text-xl" />
                    <span className="font-medium text-sage-700">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://etsy.com/shop/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-terracotta-50 transition-colors border border-terracotta-100"
                  >
                    <FaEtsy className="text-terracotta-600 text-xl" />
                    <span className="font-medium text-sage-700">Etsy Shop</span>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 border border-terracotta-100">
                <h2 className="text-2xl font-serif text-terracotta-600 mb-6">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-2">
                      Do you accept custom orders?
                    </h3>
                    <p className="text-sage-600 text-sm">
                      Yes! I love creating custom pieces. Please contact me with your ideas and I'll work with you to bring your vision to life.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-2">
                      How long do custom orders take?
                    </h3>
                    <p className="text-sage-600 text-sm">
                      Custom orders typically take 2-4 weeks depending on complexity. I'll provide a timeline when we discuss your project.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-2">
                      Do you ship internationally?
                    </h3>
                    <p className="text-sage-600 text-sm">
                      Yes, I ship worldwide through my Etsy shop. Shipping costs and delivery times vary by location.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
