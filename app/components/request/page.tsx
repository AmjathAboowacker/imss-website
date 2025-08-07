'use client';

import { useState } from 'react';

export default function ContactWhatsAppForm() {
  const [formData, setFormData] = useState({
    name: '',
    shop: '',
    business: '',
    contact: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, shop, business, contact, location } = formData;

    if (!name || !shop || !business || !contact || !location) {
      alert('Please fill in all fields');
      return;
    }

    const phone = '94752233855'; // Replace with your WhatsApp number
    const message = `
Hello IMSS,

Name: ${name}
Shop Name: ${shop}
Business Type: ${business}
Contact Number: ${contact}
Location: ${location}`;

    const encodedMessage = encodeURIComponent(message.trim());
    const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="min-h-screen  flex items-center justify-center p-6 mt-[90px]">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden grid md:grid-cols-2 border-2 border-green-500">
        {/* Left Side */}
        <div className="bg-green-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Request a Callback</h2>
          <p className="text-lg opacity-90 mb-6">
            Fill out the form and we’ll connect with you via WhatsApp.
          </p>
          <img
            src="/contact.png" // Add an image here if you want (optional)
            alt="Business Collab"
            className="w-full h-64 object-cover rounded-lg mt-6 md:mt-0 md:w-auto md:h-auto md:max-w-md md:max-h-full mx-auto"
          />
        </div>

        {/* Right Side – Form */}
        <div className="p-10 bg-white">
          <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="shop"
              placeholder="Shop Name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="business"
              placeholder="Type of Business"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
