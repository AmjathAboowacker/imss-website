'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Animated circles as a separate component to avoid hydration errors
function AnimatedNavbarCircles() {
  const [circles, setCircles] = useState<
    { width: number; height: number; top: number; left: number; duration: number; delay: number; color: string }[]
  >([]);

  useEffect(() => {
    setCircles(
      Array.from({ length: 50 }).map((_, i) => ({
        width: Math.random() * 8 + 4,
        height: Math.random() * 8 + 4,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 2,
        color: i % 2 === 0 ? 'bg-orange-600' : 'bg-orange-800',
      }))
    );
  }, []);

  if (circles.length === 0) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {circles.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${c.color}`}
          style={{
            width: `${c.width}px`,
            height: `${c.height}px`,
            top: `${c.top}%`,
            left: `${c.left}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: c.duration,
            ease: 'easeInOut',
            delay: c.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    const ids = ['home', 'about', 'service', 'web', 'marketing', 'contact'];
    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 transition-all duration-300 font-playfair bg-gradient-to-r from-white via-orange-300 to-orange-600 shadow-lg backdrop-blur-md rounded-b-3xl"
    >
      {/* ✨ Animated Running Small Circles */}
      <AnimatedNavbarCircles />

      <div className="flex justify-between items-center px-4 py-2 sm:px-8">
        {/* Logo */}
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="p-2 rounded-4xl object-contain transition-transform duration-500 hover:scale-110"
            priority
          />
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex gap-6 items-center font-semibold text-black">
          <Link href="/" className={navLinkClass(activeSection === 'home')}>Home</Link>
          <Link href="/components/about" className={navLinkClass(activeSection === 'about')}>About</Link>

          <div className="relative">
            <button onClick={() => toggleMenu('services')} className="flex items-center space-x-1 hover:bg-orange-700 p-1 rounded-full hover:text-white transition hover:border-2 border-white">
              <span className="uppercase text-base font-semibold">Services</span>
              <FaChevronDown size={12} />
            </button>
            {openMenu === 'services' && (
              <div className="absolute top-8 left-0 bg-white text-black shadow-md rounded-md w-48 py-2 z-50">
                <Link href="/components/itservicess#it" className="block px-4 py-2 text-center rounded-full hover:bg-orange-700 hover:text-white hover:border-2 border-white">IT Services</Link>
                <Link href="/components/marketingservice#marketing" className="block px-4 py-2 text-center rounded-full hover:bg-orange-700 hover:text-white hover:border-2 border-white">Marketing Services</Link>
              </div>
            )}
          </div>

          {/* <Link href="/components/product" className={navLinkClass(false)}>Product</Link>
          <Link href="/components/clients-nav" className={navLinkClass(false)}>Clients</Link> */}
          <a href="/#contact" className={navLinkClass(activeSection === 'contact')}>Contact</a>
        </nav>

        {/* Right Tools */}
        <div className="hidden sm:flex items-center gap-4">
          {/* <select
            aria-label="language"
            className="border rounded px-2 py-1 text-base text-black"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>தமிழ்</option>
            <option>සිංහල</option>
          </select> */}
          <a
            href="/components/request"
            className="uppercase text-white font-semibold bg-orange-600 px-3 py-1 rounded-2xl border-double border-white border-1 hover:bg-orange-700 hover:border-1 hover:border-blue-500 transition"
          >
            Request Now
          </a>
        </div>
        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl text-black"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden px-4 py-4 space-y-4 text-center shadow-md overflow-hidden bg-gradient-to-r from-white via-orange-300 to-orange-600 text-black"
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className={mobileLinkClass(activeSection === 'home')}>Home</Link>
            <Link href="/components/about" onClick={() => setMenuOpen(false)} className={mobileLinkClass(activeSection === 'about')}>About</Link>

            <div className="space-y-2">
              <a href="#service" onClick={() => setMenuOpen(false)} className={mobileLinkClass(activeSection === 'service')}>Service</a>
              <div className="pl-4 p-2">
                <Link href="/components/itservices#it" onClick={() => setMenuOpen(false)} className="block px-4 py-2 rounded-full hover:bg-orange-700 hover:text-white hover:border-2 border-white">IT Services</Link>
                <Link href="/components/marketingservice#marketing" onClick={() => setMenuOpen(false)} className="block px-4 py-2 rounded-full hover:bg-orange-700 hover:text-white hover:border-2 border-white">Marketing Services</Link>
              </div>
            </div>

            {/* <Link href="/components/product" onClick={() => setMenuOpen(false)} className={mobileLinkClass(false)}>Product</Link>
            <Link href="/components/clients-nav" onClick={() => setMenuOpen(false)} className={mobileLinkClass(false)}>Clients</Link> */}
            <Link href="/#contact" onClick={() => setMenuOpen(false)} className={mobileLinkClass(activeSection === 'contact')}>Contact</Link>

            <div className="mt-4 space-y-2">
              {/* <select
                aria-label="language"
                className="w-full border rounded px-2 py-1 text-sm"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>English</option>
                <option>தமிழ்</option>
                <option>සිංහල</option>
              </select> */}
              <a
              href="/components/request"
              className="uppercase text-white font-semibold bg-orange-600 px-3 py-1 rounded-2xl border-double border-white border-1 hover:bg-orange-700 hover:border-1 hover:border-blue-500 transition"
              >
              Request Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Helper functions
function navLinkClass(isActive: boolean) {
  return `uppercase text-base font-semibold px-3 py-1 rounded-2xl transition-all ${
    isActive
      ? 'bg-orange-600 text-white shadow-md '
      : 'hover:bg-orange-700 hover:text-white hover:shadow-md hover:border-2 border-white'
  }`;
}

function mobileLinkClass(isActive: boolean) {
  return `block uppercase text-base font-semibold px-3 py-1 rounded-2xl transition-all ${
    isActive
      ? 'bg-orange-600 text-white shadow-md'
      : 'hover:bg-orange-700 hover:text-white hover:shadow-md hover:border-2 border-white'
  }`;
}