'use client';

import { useState } from 'react';

export default function ContactWhatsAppForm() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    contact: '',
    description: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, business, contact, description, location } = formData;

    if (!name || !business || !contact || !description || !location) {
      alert('Please fill in all fields');
      return;
    }

    const phone = '94752233855'; // Replace with your WhatsApp number
    const message = `
                    Hello IMSS,

                    Name: ${name}
                    Business Type: ${business}
                    Contact Number: ${contact}
                    Description: ${description}
                    Location: ${location}`;

    const encodedMessage = encodeURIComponent(message.trim());
    const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="bg-gray-100 py-20 px-6 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <div className="grid md:grid-cols-2 grid-cols-1 border-2 border-green-500">
          {/* Left Side – Info/Visual */}
          <div className="bg-green-600 p-10 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
            <p className="text-lg opacity-90">
              Tell us about your business and we’ll contact you via WhatsApp to assist.
            </p>
             <img
            src="/contact.png" // Add an image here if you want (optional)
            alt="Business Collab"
            className="w-full h-64 object-cover rounded-lg mt-6 md:mt-0 md:w-auto md:h-auto md:max-w-md md:max-h-full mx-auto"
          />
          </div>

          {/* Right Side – Form */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-5 text-gray-800">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              <input
                type="text"
                name="business"
                placeholder="Type of Business"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              <textarea
                name="description"
                placeholder="Describe your needs"
                rows={3}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              ></textarea>
              <input
                type="text"
                name="location"
                placeholder="Your Location"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
