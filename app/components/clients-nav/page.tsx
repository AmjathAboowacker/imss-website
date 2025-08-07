// pages/clients/index.js
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const clientsData = [
  {
    id: 1,
    name: 'Client A',
    logo: '/logos/logo1.png',
    description: 'Client A is a leading tech solutions provider with global reach.',
    website: 'https://client-a.com',
  },
  {
    id: 2,
    name: 'Client B',
    logo: '/logos/logo2.png',
    description: 'Client B is a well-known e‑commerce brand trusted worldwide.',
    website: 'https://client-b.com',
  },
  {
    id: 3,
    name: 'Client C',
    logo: '/logos/logo3.png',
    description: 'Client C specializes in mobile app development and innovation.',
    website: 'https://client-c.com',
  },
  {
    id: 4,
    name: 'Client D',
    logo: '/logos/logo4.png',
    description: 'Client D provides consulting and digital transformation services.',
    website: 'https://client-d.com',
  },
  {
    id: 5,
    name: 'Client E',
    logo: '/logos/logo5.png',
    description: 'Client E is a market leader in cloud computing.',
    website: 'https://client-e.com',
  },
  {
    id: 6,
    name: 'Client F',
    logo: '/logos/logo6.png',
    description: 'Client F offers innovative AI solutions globally.',
    website: 'https://client-f.com',
  },
  {
    id: 7,
    name: 'Client G',
    logo: '/logos/logo7.png',
    description: 'Client G specializes in cybersecurity and risk management.',
    website: 'https://client-g.com',
  },
  {
    id: 8,
    name: 'Client H',
    logo: '/logos/logo8.png',
    description: 'Client H provides world-class consulting services.',
    website: 'https://client-h.com',
  },
  {
    id: 9,
    name: 'Client I',
    logo: '/logos/logo9.png',
    description: 'Client I develops mobile games with millions of users.',
    website: 'https://client-i.com',
  },
  {
    id: 10,
    name: 'Client J',
    logo: '/logos/logo10.png',
    description: 'Client J is an e-commerce platform with fast delivery.',
    website: 'https://client-j.com',
  },
  // Add up to 41 clients similarly...
]

export default function ClientsAllDetailsPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white bg-orange-600 py-3 rounded-full">
        Our Clients
      </h1>

      <div className="space-y-12 max-w-5xl mx-auto">
        {clientsData.map((client, index) => (
          <motion.div
            key={client.id}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              {/* Logo */}
              <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={120}
                  className="h-auto w-a object-contain mx-auto"
                  unoptimized
                />
              </div>

              {/* Details */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">{client.name}</h2>
                <p className="text-gray-700 mb-4">{client.description}</p>
                {/* <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Visit Website
                </a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
