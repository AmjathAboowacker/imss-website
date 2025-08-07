'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'

// ✅ 1. Manually list all 41 logo paths
const logos = [
  "/logos/logo001.png",
  "/logos/logo002.png",
  "/logos/logo003.png",
  "/logos/logo004.png",
  "/logos/logo005.png",
  "/logos/logo006.png",
  "/logos/logo007.png",
  "/logos/logo008.png",
  "/logos/logo009.png",
  "/logos/logo010.png",
  "/logos/logo011.png",
  "/logos/logo012.png",
  "/logos/logo013.png",
  "/logos/logo015.png",
  "/logos/logo016.png",
  "/logos/logo017.png",
  "/logos/logo018.png",
  "/logos/logo019.png",
  "/logos/logo020.png",
  "/logos/logo021.png",
  "/logos/logo022.png",
  "/logos/logo023.png",
  "/logos/logo024.png",
  "/logos/logo025.png",
  "/logos/logo026.png",
  "/logos/logo027.png",
  "/logos/logo028.png",
  "/logos/logo029.png",
  "/logos/logo030.png",
  "/logos/logo031.png",
  "/logos/logo032.png",
  "/logos/logo033.png",
  "/logos/logo034.png",
  "/logos/logo035.png",
  "/logos/logo036.png",
  "/logos/logo037.png",
  "/logos/logo038.png",
  "/logos/logo039.png",
  "/logos/logo040.png",
  "/logos/logo041.png",
];
export default function BrandsSection() {
  return (
    <section className="text-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 uppercase">Brands We've Made Shine</h2>
        <p className=" text-black rounded-xl py-4 max-w-2xl mx-auto text-lg font-light  text-center">
          We empower leading brands with innovative IT and marketing solutions.
          Our success is reflected in a diverse portfolio of satisfied clients
          across multiple industries in Colombo, Sri Lanka.
        </p>

        {/* Smooth Swiper Carousel */}
        <div className="mt-10 overflow-hidden border-t border-b border-black"> 
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            style={{
              transitionTimingFunction: 'linear',
            }}
          >
            {logos.map((src, index) => (
              <SwiperSlide
                key={index}
                style={{ width: 'auto' }}
              >
                <div className=" px-1 py-4 rounded-xl  flex justify-center items-center ">
                  <Image
                    src={src}
                    alt={`Brand logo ${index + 1}`}
                    width={80}
                    height={80}
                    className=" w-auto h-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}