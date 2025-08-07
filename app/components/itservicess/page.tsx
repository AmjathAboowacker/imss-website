'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = ['/slider/s1.jpg', '/slider/s2.jpg', '/slider/s3.jpg'];

const itTabs = [
  {
    label: 'Website Design & Development',
    title: 'Custom Web Design & Development',
    description:
      'We create fast, responsive, SEO-friendly websites tailored to your business goals.',
    features: [
      'Modern UI/UX design',
      'E-commerce and CMS integration',
      'Performance optimization',
      'SEO and analytics setup',
      'Built with React, Next.js, Tailwind',
    ],
    image: '/itservices/website.png',
  },
  {
    label: 'Mobile App',
    title: 'Cross-Platform Mobile App Development',
    description:
      'Build Android & iOS apps using React Native or Flutter with smooth performance and elegant UI.',
    features: [
      'Cross-platform support',
      'Push notifications',
      'Payment gateway integration',
      'Offline mode and local storage',
      'Real-time updates with API',
    ],
    image: '/itservices/mobile.png',
  },
  {
    label: 'ERP & POS System',
    type: 'erp_pos',
    title: 'Integrated ERP & POS System',
    description: 'Manage all business operations and sales in one combined solution.',
    features: [
      'Inventory & sales tracking',
      'Financial & accounting tools',
      'Role-based access',
      'Barcode, billing & invoicing',
      'Cloud reports & multi-branch support',
    ],
    image: '/itservices/erp-pos.png',
    showCombinedPackages: true,
  },
  {
    label: 'LMS System',
    title: 'Learning Management System (LMS)',
    description:
      'Provide online learning, assignments, tracking, and user roles with a powerful LMS platform.',
    features: [
      'Student, teacher, and admin roles',
      'Assignments and quizzes',
      'Video course hosting',
      'Certificates and progress tracking',
      'Mobile-friendly & SCORM compatible',
    ],
    image: '/itservices/lms02.png',
  },
  {
    label: 'Car Service Mechanic Management',
    title: 'Auto Service Management System',
    description:
      'Track service history, parts, payments, and customer profiles in your auto workshop with ease.',
    features: [
      'Service history management',
      'Parts inventory tracking',
      'Technician scheduling',
      'SMS/email service reminders',
      'Multi-location garage support',
    ],
    image: '/itservices/car.png',
  },
  {
    label: 'Renter Management',
    title: 'Tenant & Rental Management System',
    description:
      'Automate rent collection, lease agreements, maintenance tickets, and reminders in one place.',
    features: [
      'Digital lease management',
      'Payment history and receipts',
      'Maintenance ticket system',
      'Rent due reminders',
      'Monthly income reports',
    ],
    image: '/itservices/renter.png',
  },
  {
    label: 'Hotel, Restaurant & Bar Management',
    title: 'All-in-One Hospitality Management',
    description:
      'Simplify booking, dining, room service, kitchen orders, and billing with our hospitality system.',
    features: [
      'Order Management',
      'Food Menue Management',
      'Table Management',
      'Rooms Management',
      'Employee Management',
      'Inventory Management',
      'Financial Accounting',
      'Customer Management',
      'Bar Inventory Management',
      'Branch Management',
      'User Management',
      'Reprts & Analytics',
    ],
    image: '/itservices/hotel.png',
  },
  {
    label: 'ERP & Accounting',
    title: 'ERP and Accounting Solutions',
    description:
      'Deploy secure cloud servers, backups, IT monitoring, and DevOps support with enterprise-grade reliability.',
    features: [
      'Ledger and tax management',
      'Invoice generation',
      'Bank reconciliation',
      'User role permissions',
      'Cloud hosting & backups',
    ],
    image: '/itservices/erp.png',
  },
];


export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [itSelected, setItSelected] = useState(itTabs[0]);
  const [erpMode, setErpMode] = useState<'online' | 'offline'>('online');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden mt-[80px]">
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
            className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Innovative IT Solutions That Drive Growth
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

      {/* IT SECTION */}
      <section id="it" className="px-4 py-20 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-tr from-orange-700 via-orange-500 to-orange-800 p-2 text-white rounded-full border-2 border-orange-600">
          IT Services
        </h2>

        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {itTabs.map((tab) => (
            <motion.button
              key={tab.label}
              onClick={() => setItSelected(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                itSelected.label === tab.label
                  ? 'bg-white text-black border-2 border-black shadow-lg'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-800 px-10 py-5 rounded-4xl max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <Image
            src={itSelected.image}
            alt={itSelected.title}
            width={300}
            height={300}
            className="rounded-xl w-auto h-auto object-cover"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">{itSelected.title}</h3>
            <p className="mb-4">{itSelected.description}</p>
            <ul className="list-disc list-inside space-y-1 text-white/90">
              {itSelected.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <a
              href="/components/request"
              className="inline-block mt-6 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow transition"
            >
              Download Now
            </a>
            {/* ERP & POS extra buttons */}
        {itSelected.type === 'erp_pos' && (
          <div className="max-w-6xl mx-auto mt-8">
            <div className="flex gap-4 justify-center mb-6">
              <a
              href="/components/product/price/online"
              className={`px-6 py-2 rounded-full font-semibold transition ${
                erpMode === 'online'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
              onClick={() => setErpMode('online')}
            >
              Online
            </a>
            <a
              href="/components/product/price/offline"
              className={`px-6 py-2 rounded-full font-semibold transition ${
                erpMode === 'offline'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
              onClick={() => setErpMode('offline')}
            >
              Offline
            </a>
            </div>
          </div>
        )}

          </div> 
        </div>
      </section>
    </div>
  );
}
