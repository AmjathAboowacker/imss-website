'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function PricePage() {
  const plan = {
    name: 'IMSS Offline POS – ERP Software',
    price: 80000,
    features: [
      'Auto Backup – Your data is always safe!',
      'Sales & Purchase Management – Track all transactions smoothly.',
      'Excel Import & Export – Transfer data easily.',
      'Inventory Control – Manage stock, suppliers & reorders.',
      'Financial Accounting – Complete income/expense & balance reports.',
      'Easy Replacements – Manage returns & exchanges.',
      'Touch POS & Barcode Support – Fast billing experience.',
      'Daily Profit Reports – Know your earnings instantly.',
      'Stock & Expiry Reports – Real-time tracking of your products.',
      'Fast Moving Product Report – Identify best sellers easily.',
      'Cash & Credit Management – Handle all types of payments.',
      'Customer Management – Store customer info & history.',
      'Staff Management – Assign roles & track activity.',
      'Multi-User Access – Give access to your team with roles.',
      'Multi-Store/Branch Management – Handle all locations in one place.',
      'Outstanding Report – Track unpaid invoices easily.',
      'Tax Handling – Automatic tax calculation & compliance.',
    ],
  }

  return (
    <section className="relative py-12 bg-gradient-to-b from-white to-orange-50 mt-[60px]">
      {/* Hero Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10 px-3">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-4">
          {plan.name}
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          🌟 <strong>Smart, Powerful & Easy‑to‑Use</strong> Software for All Businesses!  
          Everything you need to manage your sales, inventory, and accounts in one place.
        </p>
      </div>

      {/* Pricing Card */}
      <div className="flex justify-center px-3">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-full max-w-3xl bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden"
        >
          {/* Price section */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-1">
              Rs. {plan.price.toLocaleString()}
            </h2>
            <p className="text-orange-100 text-base">Starting Package Price</p>
          </div>

          {/* Features */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              What’s Included:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-sm max-h-[300px] overflow-auto pr-1">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 bg-orange-50/50 rounded-lg p-2 hover:bg-orange-100/70 transition"
                >
                  <span className="text-green-500 text-lg">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call To Action */}
          <div className="px-6 pb-6">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/components/request"
              className="block w-full text-center py-3 rounded-xl text-white font-semibold text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-md transition-all"
            >
              ✅ Get IMSS POS Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
