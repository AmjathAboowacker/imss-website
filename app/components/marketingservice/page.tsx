'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = ['/slider/s1.jpg', '/slider/s2.jpg', '/slider/s3.jpg'];

const marketingtabs = [
  {
    label: 'Digital Marketing',
    title: 'Digital Marketing Overview',
    description:
      'At IMSS, we craft tailored digital marketing strategies that help your brand stand out, attract the right audience, and generate measurable results. From SEO to PPC, we do it all.',
    points: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing (SMM)',
      'Google Ads (PPC)',
      'Email & SMS Campaigns',
      'Content Marketing',
    ],
    image: '/service.img/digital-marketing1.png',
  },
  {
    label: 'Social Media',
    title: 'Social Media Management',
    description:
      'We manage your brand’s presence across Facebook, Instagram, LinkedIn, and TikTok. Our strategy includes content calendars, designs, engagement, and ads that connect and convert.',
    image: '/service.img/social-media1.png',
  },
  {
    label: 'Brand Strategy',
    title: 'Brand Strategy',
    description:
      'We help you build a brand that connects. From discovery sessions to visual identity, we define what makes you unique and guide your messaging across all channels.',
    image: '/service.img/brand1.png',
  },
  {
    label: 'SMS & Email',
    title: 'SMS & Email Campaigns',
    description:
      'We create professional, personalized SMS and email campaigns that drive engagement, promote offers, and bring customers back. Includes design, automation, and A/B testing.',
    image: '/service.img/social-management1.png',
  },
  {
    label: 'Advertising',
    title: 'Advertising Services',
    description:
      'We offer both digital and print advertising services — from Google, Facebook, and YouTube ads to banners and flyers. Perfect for awareness, reach, and conversions.',
    image: '/service.img/adverticing1.png',
  },
  {
    label: 'Door-to-Door',
    title: 'Door-to-Door Advertising',
    description:
      'Our door-to-door team helps distribute your flyers, brochures, and offers directly to customers in your local area — with tracking, reporting, and targeting options.',
    image: '/service.img/door-to-door1.png',
  },
  {
    label: 'Email Campaigns',
    title: 'Email Campaign Strategy',
    description:
      'Send well-crafted email newsletters that engage users, drive clicks, and nurture customer relationships with measurable performance.',
    image: '/service.img/email.png',
  },
  {
    label: 'Local SEO',
    title: 'Local SEO Optimization',
    description:
      'Get found by nearby customers through Google Business Profile optimization, map packs, and geo-targeted content.',
    image: '/service.img/seo.png',
  },
];

export default function MarketingService() {
  const [index, setIndex] = useState(0);
  const [marketingSelected, setMarketingSelected] = useState(marketingtabs[0]); 


  useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);


  return (
    <div>
        {/* Hero Background Slider */}
        <div className="relative w-full h-[500px] overflow-hidden mt-[80px]">
            {images.map((img, i) => (
            <motion.div
                key={i}
                className="absolute inset-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${img})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === i ? 1 : 0 }}
                transition={{ duration: 1 }}
                  />
                ))}
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                  <motion.h1
                    className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Innovative Marketing Solutions That Drive Growth
                </motion.h1>
                <motion.p
                    className="text-white text-lg md:text-2xl max-w-4xl drop-shadow-sm mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    At <strong>IMSS</strong>, we combine technology and strategy to deliver powerful digital marketing, branding, and IT solutions.
                </motion.p>
                <motion.a
                    href="/components/request"
                    className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-600 hover:text-white transition shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                 Get Your Free Marketing Consultation
                </motion.a>
            </div>
        </div>

    {/* MARKETING SECTION */}
      <section id='marketing' className="px-4 py-20 text-black" >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-tr from-orange-700 via-orange-500 to-orange-800 p-2 text-white rounded-full border-2 border-orange-600">Digital Marketing Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {marketingtabs.map((tab) => (
            <motion.button
              key={tab.label}
              onClick={() => setMarketingSelected(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                marketingSelected.label === tab.label
                  ? 'bg-white text-black border-2 border-black shadow-lg'
                  : 'bg-orange-600 text-white hover:bg-orange-800'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
        <div className="bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-800 px-10 py-5 rounded-4xl max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <Image
            src={marketingSelected.image}
            alt={marketingSelected.title}
            width={400}
            height={300}
            className="rounded-xl w-auto object-cover "
          />
          <div className="flex-1 text-white">
            <h3 className="text-2xl font-bold mb-4">{marketingSelected.title}</h3>
            <p className="mb-4">{marketingSelected.description}</p>
            {marketingSelected.points && (
              <ul className="list-disc pl-5 space-y-2">
                {marketingSelected.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
              <a
              href="/components/contact-form"
              className="inline-block mt-6 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow  hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
