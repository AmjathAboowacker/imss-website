'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative pt-28 pb-20 bg-gradient-to-r from-orange-600 to-white overflow-hidden"
    >
      {/* 🔶 Decorative SVG Divider on Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
            906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
            214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#fffaf5"
          />
        </svg>
      </div>

      {/* 🌟 Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* 📷 Image Section with Animation */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src="/whychoise.png"
              alt="Why Choose IMSS"
              width={600}
              height={400}
              className="rounded-3xl object-cover"
            />
          </motion.div>

          {/* 📝 Text Content with Scroll Animation */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#1e293b] uppercase">
              Why Choose IMSS?
            </h2>
            <p className="text-[#2d2d2d] mb-4 text-lg leading-relaxed text-justify">
              Infinity Marketing Services &amp; Solutions (IMSS) is not just another
              service provider – we are your growth partner. With over 5 years of
              experience and a rare blend of strategic marketing expertise and
              cutting-edge IT solutions, we help businesses thrive in today’s
              competitive digital world.
            </p>
            <p className="text-[#2d2d2d] text-lg leading-relaxed text-justify">
              Our passionate team brings industry insights, creativity, and proven
              strategies to drive results — from traffic growth to sales conversion.
              Based in Sri Lanka with a global mindset, we offer affordable, scalable
              solutions tailored to your goals.
            </p>
            <div className="flex items-end justify-end">
              <a
                href="/components/contact-form/"
                className="inline-block mt-6 px-8 py-3 bg-[#ff6b00] hover:bg-[#d45500] text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Contact us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
