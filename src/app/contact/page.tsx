'use client';

import { motion } from "framer-motion";
import { FaSpinner, FaCheck } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import { trackEvent, trackConversion, analyticsConfig } from "@/lib/analytics";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

    // Track form start
    trackEvent(analyticsConfig.events.CONTACT_FORM_START, {
      form_name: 'contact_form',
      page_location: window.location.href,
    });

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.surname}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', surname: '', email: '', subject: '', message: '' });
        
        // Track successful form submission
        trackEvent(analyticsConfig.events.CONTACT_FORM_SUCCESS, {
          form_name: 'contact_form',
          page_location: window.location.href,
        });
        
        // Track conversion
        trackConversion(analyticsConfig.conversions.CONTACT_FORM_SUBMISSION);
      } else {
        setSubmitStatus('error');
        
        // Track form error
        trackEvent(analyticsConfig.events.CONTACT_FORM_ERROR, {
          form_name: 'contact_form',
          error_type: 'server_error',
          page_location: window.location.href,
        });
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      setSubmitStatus('error');
      
      // Track form error
      trackEvent(analyticsConfig.events.CONTACT_FORM_ERROR, {
        form_name: 'contact_form',
        error_type: 'network_error',
        page_location: window.location.href,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark-teal">
      <div className="w-full" style={{ paddingLeft: '200px', paddingRight: '105px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >
            <h1 
              className="font-temeraire-display font-bold mb-2"
              style={{ fontSize: '60px', color: '#FF8A9D', textAlign: 'left' }}
            >
              GET IN TOUCH
            </h1>
            
            <p 
              className="font-mencken-regular mb-4"
              style={{ fontSize: '13px', color: '#FBEAD5', lineHeight: '1.3', textAlign: 'left', paddingRight: '100px' }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            
            <p 
              className="font-mencken-regular"
              style={{ fontSize: '11px', color: '#FBEAD5', lineHeight: '1.3', textAlign: 'left', marginBottom: '20px' }}
            >            </p>

                    {/* Pink Form Container */}
                    <div
                      className="rounded-2xl"
                      style={{ backgroundColor: '#FF8A9D', padding: '16px', maxWidth: '85%', aspectRatio: '4/2.2' }}
                    >
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Fields */}
                <div>
                  <label 
                    className="block font-mencken-bold mb-2"
                    style={{ color: '#1a4d3a', fontSize: '12px', padding: '5px' }}
                  >
                    Name*
                  </label>
                          <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border-0"
                      style={{ backgroundColor: '#FBEAD5', padding: '6px' }}
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border-0"
                      style={{ backgroundColor: '#FBEAD5', padding: '6px' }}
                      placeholder="Surname"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    className="block font-mencken-bold mb-2"
                    style={{ color: '#1a4d3a', fontSize: '12px', padding: '5px' }}
                  >
                    E-mail*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border-0"
                    style={{ backgroundColor: '#FBEAD5', padding: '6px' }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label 
                    className="block font-mencken-bold mb-2"
                    style={{ color: '#1a4d3a', fontSize: '12px', padding: '5px' }}
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border-0"
                    style={{ backgroundColor: '#FBEAD5', padding: '6px' }}
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    className="block font-mencken-bold mb-2"
                    style={{ color: '#1a4d3a', fontSize: '12px', padding: '5px' }}
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                        rows={2}
                    className="w-full rounded-lg border-0 resize-none"
                    style={{ backgroundColor: '#FBEAD5', padding: '12px' }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Send Button */}
                <div className="flex justify-end" style={{ marginTop: '16px' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-2xl font-mencken-bold text-sm transition-all duration-300 flex items-center gap-2"
                    style={{ paddingLeft: '30px', paddingRight: '30px', 
                      backgroundColor: isSubmitting ? '#1a4d3a80' : '#1a4d3a',
                      color: 'white'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'SEND'
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-lg flex items-center gap-2"
                    style={{ backgroundColor: '#1a4d3a20', color: '#1a4d3a' }}
                  >
                    <FaCheck />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-lg"
                    style={{ backgroundColor: '#ff000020', color: '#ff0000' }}
                  >
                    Sorry, there was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Column - Contact Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden md:col-span-2 aspect-square"
          >
            <Image
              src="https://res.cloudinary.com/dxpdn6xgr/image/upload/f_auto,q_auto,w_600,h_600,c_fit,dpr_auto,fl_progressive/toska-cr/contact/get_in_touch.jpg"
              alt="Get in Touch - Contact Toska CR"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
