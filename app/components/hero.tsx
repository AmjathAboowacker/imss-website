'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // ⬅️ observe every time it comes into view
    margin: '-100px', // optional: trigger slightly before fully in view
  });

  return (
    <section
      ref={ref}
      className="relative rounded-4xl text-white px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} // ⬅️ reverse on scroll out
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left bg-gradient-to-r from-black to-white px-10 rounded-3xl shadow-lg mt-[10px]"
      >
        {/* 📄 Text Content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-xl lg:text-2xl font-bold font-serif leading-snug text-white">
            <span className="font-extrabold text-xl lg:text-5xl">
              Welcome to{' '}
              <span className="text-orange-500 text-danger pb-4">
                Infinity Marketing Service & Solution
              </span>
            </span>
            <br />
            Your One Stop Destination for Innovative Marketing Strategies and Advanced IT Solutions
          </h2>

          <div className="text-2xl lg:text-5xl font-serif font-extrabold text-white">
            Are You Ready to Grow Your <br /> Business?
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Request a consultation now"
            className="px-6 py-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-800 transition duration-300 font-semibold text-lg animate-bounce hover:animate-none"
          >
            <a href="./components/request">Download</a>
          </motion.button>
        </div>

        {/* 🖼️ Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} // ⬅️ animate out when not in view
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1"
        >
          <Image
            src="/hero.png"
            alt="Marketing illustration"
            width={500}
            height={500}
            className="w-full h-auto rounded-3xl"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
