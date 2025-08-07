'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/about.img/about1.jpg',
  '/about.img/about2.jpg',
  '/about.img/about3.jpg',
  '/about.img/about4.jpg',
  '/about.img/about5.jpg']; // Put in /public

export default function AboutPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-[90px] text-black">
      {/* 🌟 Custom Image Slider */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[index]}
              alt={`Slider ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ✅ About Content Below */}
      <div className="px-4 py-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Empowering Brands. Powering Innovation.
        </motion.h1>

        <p className="max-w-3xl text-justify text-lg leading-relaxed mb-4">
          Founded in 2021, Infinity Marketing Services & Solutions began its journey as a corporate-registered entity with a strong focus on strategic marketing initiatives. With a vision to support businesses in enhancing their market presence, we initially specialized in tailored advertising, promotions, and client outreach strategies.
        </p>
        <p className="max-w-3xl text-justify text-lg leading-relaxed mb-4">
          By 2024, recognizing the evolving digital landscape and the rising demand for technological transformation, the company expanded into the Information Technology sector, officially registering as a Private Limited Company. This strategic shift allowed us to combine the power of creative marketing with robust tech solutions offering a full-suite service experience to our clients.
        </p>
        <p className="max-w-3xl text-justify text-lg leading-relaxed mb-4">
          Today, with over 5 years of industry experience, we proudly stand as a hybrid agency delivering end-to-end solutions in both marketing and IT. From digital campaigns and brand strategy to custom software, web platforms, and enterprise systems, we are committed to empowering businesses with smart, scalable, and future-ready tools
        </p>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4 py-10 max-w-6xl mx-auto bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-800 rounded-t-4xl shadow-2xl backdrop-blur-sm">
          {/* Vision Statement Block */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white text-center">Vision Statement</h3>
            <p className="text-white leading-relaxed text-center">
              To become a leading force in integrating marketing excellence with innovative technology,
              empowering businesses to achieve sustainable growth in a digital-first world.
            </p>
          </div>

          {/* Image Block */}
          <div className="flex justify-center">
            <img
              src="/about.img/vision.png"
              alt="Vision"
              className="w-full max-w-md rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 border-1 border-white"
            />
          </div>

          {/* Image Block */}
          <div className="flex justify-center">
            <img
              src="/about.img/mission.png"
              alt="Mission"
              className="w-full max-w-md rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 border-1 border-white"
            />
          </div>

          {/* Mission Statement Block */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white text-center">Mission Statement</h3>
            <p className="text-white text-center leading-relaxed">
              To deliver impactful marketing strategies and cutting-edge IT solutions that drive business success,
              through innovation, integrity, and a deep understanding of our clients’ needs.
            </p>
          </div>
        </div>

    </div>
  );
}
