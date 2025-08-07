'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section className="py-16 px-4 text-black font-serif">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* 📩 Contact Form */}
        <div>
          <h2 className="text-3xl font-serif font-semibold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="mt-1 w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="mt-1 w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                required
                className="mt-1 w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-700"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 📍 Contact Info and Embedded Map */}
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
            <p>
              <strong>IMSS Innovation IT Solution</strong> <br />
              176. First Floor, Main Street, <br />
              Kalmunai, Sri Lanka
            </p>
          </div>

          {/* 🌍 Embedded Google Map */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg border">
            <iframe
              title="IMSS Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.56227923199657!2d81.82851640617602!3d7.409976605601635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae53f0010194bf1%3A0x3f47404c881bd918!2sIMSS%20-%20Infinity%20Marketing%20Services%20and%20Solutions!5e0!3m2!1sen!2slk!4v1753176414074!5m2!1sen!2slk"
              width="100%"
              height="100%"
              // style={{ border: 0 }}
              allowFullScreen
              // loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
