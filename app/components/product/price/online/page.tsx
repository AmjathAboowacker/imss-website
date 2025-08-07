'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function PricePage() {
  const [isMonthly, setIsMonthly] = useState(true)

  const plans = [
    {
      name: 'Silver',
      daily: 166.66,
      features: [
        'Inventory Management',
        'Add & manage items',
        'Track stock quantities',
        'Barcode generation',
        'Sales & Customer Management',
        'Basic billing',
        'Sales return management',
        'Customer profiles',
        'Comprehensive Reporting',
        'Monthly sales reports',
        'Item-wise stock reports',
        'Purchasing',
        'Manage purchase orders',
        'Automation & Templates',
        'Basic SMS templates',
        'Standard invoice design',
        // New ERP Offline features
        'Offline Data Access & Sync',
        'Local Database Storage',
        'Basic User Roles & Permissions',
      ],
      highlight: false,
    },
    {
      name: 'Gold',
      daily: 216.66,
      features: [
        'Includes everything in SILVER, plus:',
        'Advanced Inventory Management',
        'Expiry date tracking',
        'Warehouse & store-based stock control',
        'Sales & Customer Management',
        'Graph-based sales performance',
        'Donut chart for top-selling products',
        'Financial Accounting',
        'Outstanding balance tracking',
        'Profit & Loss statement',
        'Profit Analysis',
        'Daily profit tracking',
        'Bill-wise profit analysis',
        'Reporting',
        'Re-check stock quantities',
        'Registry & daily sales reports',
        'Voucher & Ledger Management',
        'Payment/receive vouchers',
        'Ledger statements & cheque records',
        'Purchasing & Approvals',
        'Purchase return management',
        'Quotation & approval workflows',
        'Automation & Templates',
        'Custom invoice branding',
        'Advanced SMS templates',
        // New ERP Offline features
        'Offline Mode with Auto Sync on Connection',
        'Multi-User Support Offline',
        'Role-Based Access Control',
      ],
      highlight: true,
    },
    {
      name: 'Premium',
      daily: 266.66,
      features: [
        'Includes everything in GOLD, plus:',
        'Full Profit Analysis',
        'Customer/supplier-wise profitability',
        'Store/location/category/company-wise profit reports',
        'Employee & Branch Management',
        'Employee roles & access',
        'Task assignments & tracking',
        'Multi-branch support with stock transfer',
        'Production & Discount System',
        'Complete production management',
        'Discount schemes & loyalty programs',
        'Upcoming Enhancements (Coming soon)',
        'AI-powered sales forecasting',
        'Automated inventory alerts',
        'Advanced customer engagement tools (Coming soon)',
        // New ERP Offline features
        'Offline Analytics Dashboard',
        'Custom Offline Workflow Automation',
        'Priority Offline Support & Updates',
      ],
      highlight: false,
    },
  ]

  return (
    <section className='relative px-30 py-20 bg-gradient-to-b from-white to-orange-50 mt-[80px]'>
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Our <span className="text-orange-600">ERP Online Pricing Plans</span>
        </h2>
        <p className="text-black">
          Choose an ERP Online plan that fits your business needs. Upgrade anytime!
        </p>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex border-2 border-orange-600 rounded-full overflow-hidden shadow-sm">
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
              isMonthly
                ? 'bg-orange-600 text-white'
                : 'text-orange-600 bg-white hover:bg-orange-50'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
              !isMonthly
                ? 'bg-orange-600 text-white'
                : 'text-orange-600 bg-white hover:bg-orange-50'
            }`}
          >
            Daily
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-8">
        {plans.map((plan, idx) => {
          // Calculate the price
          const priceValue = isMonthly
            ? (plan.daily * 30).toFixed(2)
            : plan.daily.toFixed(2)
          const priceUnit = isMonthly ? '/month' : '/day'

          return (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={idx}
              className={`relative rounded-2xl border shadow-lg transition-all overflow-hidden ${
                plan.highlight
                  ? 'border-yellow-400 bg-yellow-50'
                  : 'bg-white'
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  {plan.name}
                </h3>

                {/* ✅ Sri Lankan Rupees */}
                <p className="text-center text-3xl font-extrabold text-blue-700 mb-6">
                  {`Rs. ${priceValue}`}
                  <span className="text-sm font-medium text-gray-500">
                    {priceUnit}
                  </span>
                </p>

                <ul className="text-sm text-gray-700 mb-6 space-y-3 flex-1 overflow-auto max-h-64">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/components/request"
                  className={`w-full block text-center py-3 px-4 rounded-xl text-white font-medium transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-yellow-500 hover:bg-yellow-600'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Get {plan.name}
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
