'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="hero mt-[10px]">
      <main className="relative px-6 py-10 bg-gradient-to-t from-orange-600 via-white/80 to-white">

        {/* ✅ Title with bounce animation */}
        <motion.h1
          className="text-center text-4xl font-bold text-white mb-10 bg-orange-600 rounded-full py-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          About Us
        </motion.h1>

        {/* ✅ Section container animation */}
        <motion.section
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* 📄 Left content */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-black">
              Empowering Brands{' '}
              <span className="text-orange-500">Powering Innovation.</span>
            </h2>
            <p className="text-black text-lg">
              Founded in 2021, Infinity Marketing Services & Solutions began its
              journey as a corporate-registered entity with a strong focus on
              strategic marketing initiatives. With a vision to support businesses
              in enhancing their market presence, we initially specialized in
              tailored advertising, promotions, and client outreach strategies.
            </p>
            <p className="text-black text-lg">
              By 2024, recognizing the evolving digital landscape and the rising
              demand for technological transformation, the company expanded into
              the Information Technology sector, officially registering as a
              Private Limited Company.
              <a
                href="/components/about"
                className="text-xl text-red-950 hover:text-red-600 font-semibold"
              >
                {' '}More..
              </a>
            </p>
          </motion.div>

          {/* 🖼️ Right Image with fade-in */}
          <motion.div
            className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src="/about.img/about1.jpg"
              alt="About us"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </motion.section>

        {/* 🔽 SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-[108%] h-[59px]"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
              82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
              906.67,72,985.66,92.83c70.05,18.48,146.53,
              26.09,214.34,3V0H0V27.35A600.21,600.21,0,
              0,0,321.39,56.44Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </main>
    </div>
  );
}
