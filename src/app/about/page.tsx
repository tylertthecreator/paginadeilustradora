'use client';

import { motion } from "framer-motion";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

export default function AboutPage() {
  return (
    <div className="bg-brand-secondary-pink w-full text-brand-light-text flex items-center justify-center" style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '70vh' }}>
      <div className="w-full max-w-6xl mx-auto" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        <div className="grid md:grid-cols-5 items-start">
          {/* Left Column: About Me Photo */}
          <motion.div 
            className="w-full aspect-square relative overflow-hidden rounded-lg shadow-lg mx-auto md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://res.cloudinary.com/dxpdn6xgr/image/upload/f_auto,q_auto,w_600,h_600,c_fit/toska-cr/about/about_me.jpg"
              alt="Gloriana - Graphic Designer and Illustrator"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right md:col-span-3"
            style={{ paddingRight: '150px' }}
          >
            <h1 
              className="font-temeraire-display uppercase font-bold"
              style={{ fontSize: '70px', marginBottom: '20px', paddingTop: '50px', color: '#FF8A9D' }}
            >
              About Me
            </h1>
            <p 
              className="font-mencken-bold"
              style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'right', color: '#FBEAD5', maxWidth: '500px', marginLeft: 'auto' }}
            >
              Hi! I'm Gloriana a freelance graphic designer and illustrator, passionate about creating art in all possible ways.
            </p>
            <div style={{ maxWidth: '1000px', marginLeft: 'auto', paddingLeft: '100px' }}>
              <p 
                className="font-mencken-regular"
                style={{ fontSize: '16px', marginBottom: '20px', marginTop: '50px', textAlign: 'justify', lineHeight: '1.3', color: '#FBEAD5' }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
              <p 
                className="font-mencken-regular"
                style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.3', color: '#FBEAD5' }}
              >
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
