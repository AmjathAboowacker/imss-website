import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/itservices/off-ERP.png",
    title: "Offline ERP with POS for Seamless Business Operations",
    subtitle: "Manage your sales, purchases, accounts, and inventory seamlessly. Work smarter and more efficiently with our Offline ERP system.",
  },
  {
    image: "/itservices/erp-pos.png",
    title: "Online ERP for Smooth Operations",
    subtitle: "Manage sales, purchases, accounts, and inventory in one place. Work faster and smarter with our Online ERP system.",
  },
  {
    image: "/itservices/mobile.png",
    title: "Effortless Mobile POS for Streamlined Retail Operations",
    subtitle: "Transform your retail business with our mobile POS system. Effortlessly handle sales, track inventory, and manage transactions from anywhere.",
  },
  {
    image: "/itservices/renter.png",
    title: "Find Hospitals, Clinics, and Laboratories Book Appointments Anytime, Anywhere!",
    subtitle: "Easily search and book appointments with doctors, hospitals, clinics, and laboratories without the need for physical visits.",
  },
  {
    image: "/itservices/lms02.png",
    title: "Manage Students, Teachers, Classes, and Attendance Anytime, Anywhere!",
    subtitle: "Easily manage your school's operations, from student enrollment to teacher schedules, all in one platform.Schools can efficiently handle attendance, grades, and communication, all through the app.",
  },
];
export default function SlideShowing() {
      const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4500);
      return () => clearInterval(timer);
    }, []);
  
    const goToPrev = () => {
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };
  
    const goToNext = () => {
      setCurrent((current + 1) % slides.length);
    };
  return (
    <>
        {/* product slider showing  */}
    <section className="relative w-full mx-auto overflow-hidden rounded-3xl font-serif mt-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[500px] w-full bg-white transition-all duration-700 ease-in-out">
            {/* Text Section */}
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center px-6 py-6 md:p-12 z-20 max-w-xl mx-auto text-center md:text-left"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {slides[current].title}
              </h2>
              <p className="text-base  text-gray-600 mb-6 text-justify">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="/components/request"
                className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-800 transition-all text-center"
                >
                Download Now
                </a>
                <a
                  href="/#contact"
                  className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition-all text-center"
                  >
                    Contact Us
                </a>
              </div>
            </motion.div>
    
            {/* Image Section */}
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src={slides[current].image}
                alt={`Slide ${current + 1}`}
                fill
                className="object-cover rounded-b-3xl md:rounded-none"
                priority
              />
    
              <div className="absolute inset-0 bg-black/30 z-10" />
    
              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-3 rounded-full hover:bg-orange-400 transition z-20"
                aria-label="Previous"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-3 rounded-full hover:bg-orange-400 transition z-20"
                aria-label="Next"
              >
                <FaArrowRight />
              </button>
    
              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label="bottons"
                    className={`w-4 h-4 md:w-3 md:h-3 rounded-full border-2 ${
                      i === current ? "bg-orange-400" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
