'use client';

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaPinterest, FaLinkedin, FaEtsy, FaSpinner, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

/* eslint-disable react/no-unescaped-entities */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Toska CR'
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark-teal">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-brand-bold text-brand-light-pink mb-6">
            Contact Me
          </h1>
          <p className="text-xl text-brand-light-pink/80 max-w-3xl mx-auto font-brand-elegant">
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
              <div className="bg-brand-dark-teal/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-brand-vibrant-pink/30">
                <h2 className="text-2xl font-brand-bold text-brand-light-pink mb-6">
                  Send Me a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-light-pink mb-2 font-brand-bold">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-brand-vibrant-pink/30 rounded-lg focus:ring-2 focus:ring-brand-vibrant-pink focus:border-transparent transition-colors bg-brand-dark-teal/20 text-brand-light-pink placeholder-brand-light-pink/60"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-light-pink mb-2 font-brand-bold">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-brand-vibrant-pink/30 rounded-lg focus:ring-2 focus:ring-brand-vibrant-pink focus:border-transparent transition-colors bg-brand-dark-teal/20 text-brand-light-pink placeholder-brand-light-pink/60"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-brand-light-pink mb-2 font-brand-bold">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-brand-vibrant-pink/30 rounded-lg focus:ring-2 focus:ring-brand-vibrant-pink focus:border-transparent transition-colors bg-brand-dark-teal/20 text-brand-light-pink placeholder-brand-light-pink/60"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-light-pink mb-2 font-brand-bold">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-brand-vibrant-pink/30 rounded-lg focus:ring-2 focus:ring-brand-vibrant-pink focus:border-transparent transition-colors resize-none bg-brand-dark-teal/20 text-brand-light-pink placeholder-brand-light-pink/60"
                      placeholder="Tell me about your project, question, or just say hello..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-brand-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-brand-vibrant-pink/50 cursor-not-allowed text-brand-light-pink/60'
                        : 'bg-brand-vibrant-pink hover:bg-brand-vibrant-pink/90 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-brand-light-pink/20 border border-brand-vibrant-pink/30 rounded-lg flex items-center gap-2 text-brand-vibrant-pink"
                    >
                      <FaCheck className="text-brand-vibrant-pink" />
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                    >
                      Sorry, there was an error sending your message. Please try again or contact me directly at hello@toskacr.com
                    </motion.div>
                  )}
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
              <div className="bg-brand-dark-teal/40 backdrop-blur-sm rounded-2xl p-8 border border-brand-vibrant-pink/30">
                <h2 className="text-2xl font-brand-bold text-brand-light-pink mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-vibrant-pink/20 rounded-full flex items-center justify-center flex-shrink-0 border border-brand-vibrant-pink/40">
                      <FaEnvelope className="text-brand-vibrant-pink text-xl" />
                    </div>
                    <div>
                      <h3 className="font-brand-bold text-brand-light-pink mb-1">Email</h3>
                      <p className="text-brand-light-pink/80">hello@toskacr.com</p>
                      <p className="text-sm text-brand-light-pink/60 font-brand-elegant">I typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-vibrant-pink/20 rounded-full flex items-center justify-center flex-shrink-0 border border-brand-vibrant-pink/40">
                      <FaPhone className="text-brand-vibrant-pink text-xl" />
                    </div>
                    <div>
                      <h3 className="font-brand-bold text-brand-light-pink mb-1">Phone</h3>
                      <p className="text-brand-light-pink/80">+1 (555) 123-4567</p>
                      <p className="text-sm text-brand-light-pink/60 font-brand-elegant">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-vibrant-pink/20 rounded-full flex items-center justify-center flex-shrink-0 border border-brand-vibrant-pink/40">
                      <FaMapMarkerAlt className="text-brand-vibrant-pink text-xl" />
                    </div>
                    <div>
                      <h3 className="font-brand-bold text-brand-light-pink mb-1">Location</h3>
                      <p className="text-brand-light-pink/80">Portland, Oregon</p>
                      <p className="text-sm text-brand-light-pink/60 font-brand-elegant">Available for local pickup</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-brand-dark-teal/30 backdrop-blur-sm rounded-2xl p-8 border border-brand-vibrant-pink/20">
                <h2 className="text-2xl font-brand-bold text-brand-light-pink mb-6">
                  Follow My Journey
                </h2>
                
                <p className="text-brand-light-pink/80 mb-6 font-brand-elegant">
                  Stay updated with my latest creations, behind-the-scenes content, 
                  and creative process on social media.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://instagram.com/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-brand-dark-teal/20 rounded-lg hover:bg-brand-vibrant-pink/20 transition-colors border border-brand-vibrant-pink/30"
                  >
                    <FaInstagram className="text-brand-vibrant-pink text-xl" />
                    <span className="font-brand-bold text-brand-light-pink">Instagram</span>
                  </a>
                  
                  <a
                    href="https://pinterest.com/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-brand-dark-teal/20 rounded-lg hover:bg-brand-vibrant-pink/20 transition-colors border border-brand-vibrant-pink/30"
                  >
                    <FaPinterest className="text-brand-vibrant-pink text-xl" />
                    <span className="font-brand-bold text-brand-light-pink">Pinterest</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-brand-dark-teal/20 rounded-lg hover:bg-brand-vibrant-pink/20 transition-colors border border-brand-vibrant-pink/30"
                  >
                    <FaLinkedin className="text-brand-vibrant-pink text-xl" />
                    <span className="font-brand-bold text-brand-light-pink">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://etsy.com/shop/toskacr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-brand-dark-teal/20 rounded-lg hover:bg-brand-vibrant-pink/20 transition-colors border border-brand-vibrant-pink/30"
                  >
                    <FaEtsy className="text-brand-vibrant-pink text-xl" />
                    <span className="font-brand-bold text-brand-light-pink">Etsy Shop</span>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-brand-dark-teal/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-vibrant-pink/20">
                <h2 className="text-2xl font-brand-bold text-brand-light-pink mb-6">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-brand-bold text-brand-light-pink mb-2">
                      Do you accept custom orders?
                    </h3>
                    <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                      Yes! I love creating custom pieces. Please contact me with your ideas and I'll work with you to bring your vision to life.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-brand-bold text-brand-light-pink mb-2">
                      How long do custom orders take?
                    </h3>
                    <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
                      Custom orders typically take 2-4 weeks depending on complexity. I'll provide a timeline when we discuss your project.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-brand-bold text-brand-light-pink mb-2">
                      Do you ship internationally?
                    </h3>
                    <p className="text-brand-light-pink/80 text-sm font-brand-elegant">
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
