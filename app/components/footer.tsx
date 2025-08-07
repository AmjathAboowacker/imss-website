'use client';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaTiktok,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold font-serif mb-4">IMSS</h3>
          <p className="text-white text-sm text-justify">
            Innovation IT Solution — building modern digital experiences for startups, SMEs, and enterprises in Sri Lanka and beyond.
          </p>
        </div>

        <div>
          <Image
              src="/f.logo.png"
              alt="About as image"
              width={400}
              height={200}
              className="w-auto h-auto rounded-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl text-white "
              priority
              />
        </div>
        

        <div >
          <div className='text-white mb-2 uppercase text-[12px] md:text-center'>Industrial Development Board</div>
          <Image
          src="/QR-Code.png"
              alt="About as image"
              width={400}
              height={200}
              className="w-auto h-auto  object-contain  text-white bg-white "
              priority
              />
        </div>
          {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/components/about" className="hover:text-white">About</Link></li>
            <li><Link href="/components/itservicess#it" className="hover:text-white">IT Services</Link></li>
            <li><Link href="/components/marketingservice#marketing" className="hover:text-white">Marketing Services</Link></li>
            <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-white text-sm mb-2">176. First Floor, Main Street, Kalmunai, Sri Lanka</p>
          <p className="text-white text-sm mb-2 font-sans">+94 67 72 84 150</p>
          <p className="text-white text-sm mb-2 font-sans">+94 74 12 22 234</p>
          {/* <p className="text-white text-sm mb-2">+94 </p> */}
          <p className="text-white text-sm mb-4">info@imss.lk</p>
        </div>
      </div>

      {/* Social Icons Row */}
      <div className="flex justify-center items-center gap-5 mt-8 flex-wrap border-2 rounded-2xl p-3">
        <a href="https://www.facebook.com/share/1AkuwdqeTV/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF className="text-2xl hover:text-blue-500 transition" />
        </a>
        <a href="https://wa.me/94752233855" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp className="text-2xl hover:text-green-400 transition" />
        </a>
        <a href="https://maps.app.goo.gl/mD8awcmJwKVELfJZA" target="_blank" rel="noopener noreferrer" aria-label="Location">
          <FaMapMarkerAlt className="text-2xl hover:text-yellow-300 transition" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-pink-500 transition" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn className="text-2xl hover:text-blue-600 transition" />
        </a>
        <a href="https://www.tiktok.com/@imss.lk0?_t=ZS-8yEZcpYqvXG&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok className="text-2xl hover:text-gray-100 transition" />
        </a>
      </div>
      {/* Bottom Copyright */}
      <div className=" border-gray-700 mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} IMSS. All rights reserved.
      </div>
    </footer>
  );
}
