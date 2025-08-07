'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaStore, FaTruck, FaIndustry, FaProjectDiagram,
  FaMoneyCheckAlt, FaNetworkWired, FaCreditCard,
  FaShoppingCart, FaCashRegister, FaGem, FaUtensils,
  FaTshirt, FaHome, FaBook, FaShoePrints, FaSpa, FaFileInvoiceDollar,
  FaPills, FaAppleAlt, FaCar, FaWarehouse, FaShoppingBasket, FaMobileAlt,
  FaGlobe, FaLeaf, FaCogs, FaMicrochip, FaUsers, FaCalendarCheck,
  FaFileAlt, FaQrcode, FaBalanceScale, FaFileInvoice, FaShieldAlt
} from 'react-icons/fa'

type Industry = {
  label: string
  icon: React.ReactNode
}

type Solution = {
  label: string
  labelIcon: React.ReactNode
  industries: Industry[]
  rightImage?: string
}

const solutions: Solution[] = [
  {
    label: 'Retail',
    labelIcon: <FaStore />,
    industries: [
      { label: 'Pharmacy', icon: <FaStore /> },
      { label: 'POS', icon: <FaCashRegister /> },
      { label: 'Supermarket', icon: <FaShoppingCart /> },
      { label: 'Jewellery', icon: <FaGem /> },
      { label: 'Restaurant', icon: <FaUtensils /> },
      { label: 'Garment', icon: <FaTshirt /> },
      { label: 'Retail Shop', icon: <FaStore /> },
      { label: 'Kirana/Grocery', icon: <FaHome /> },
      { label: 'Departmental', icon: <FaStore /> },
      { label: 'Salon & Spa', icon: <FaSpa /> },
      { label: 'Bookstore', icon: <FaBook /> },
      { label: 'Footwear', icon: <FaShoePrints /> },
    ],
    rightImage: '/drive/drive1.png',
  },
  {
    label: 'Distribution',
    labelIcon: <FaTruck />,
    industries: [
      { label: 'Pharma & Healthcare', icon: <FaPills /> },
      { label: 'FMCG', icon: <FaAppleAlt /> },
      { label: 'Automobile', icon: <FaCar /> },
      { label: 'Warehouse', icon: <FaWarehouse /> },
      { label: 'Mandi', icon: <FaShoppingBasket /> },
      { label: 'Electronic Application', icon: <FaMobileAlt /> },
      { label: 'Jewellery', icon: <FaGem /> },
      { label: 'Textile & Apparel', icon: <FaTshirt /> },
      { label: 'Import/Export Trading', icon: <FaGlobe /> },
    ],
    rightImage: '/drive/drive2.png',
  },
  {
    label: 'Manufacturing',
    labelIcon: <FaIndustry />,
    industries: [
      { label: 'Pharmaceutical', icon: <FaPills /> },
      { label: 'Food', icon: <FaUtensils /> },
      { label: 'Ayurvedic', icon: <FaLeaf /> },
      { label: 'Automobile', icon: <FaCar /> },
      { label: 'Textile', icon: <FaTshirt /> },
      { label: 'Assembling', icon: <FaCogs /> },
      { label: 'Process Manufacturing', icon: <FaIndustry /> },
      { label: 'Electronic Manufacturing', icon: <FaMicrochip /> },
    ],
    rightImage: '/drive/drive6.png',
  },
  {
    label: 'ERP',
    labelIcon: <FaProjectDiagram />,
    industries: [
      { label: 'Retail Chain', icon: <FaStore /> },
      { label: 'Supply Chain', icon: <FaTruck /> },
      { label: 'SFA', icon: <FaNetworkWired /> },
      { label: 'ERP Solution', icon: <FaProjectDiagram /> },
      { label: 'Pharma ERP', icon: <FaPills /> },
    ],
    rightImage: '/drive/drive4.png',
  },
  {
    label: 'Payroll',
    labelIcon: <FaMoneyCheckAlt />,
    industries: [
      { label: 'Salary Management', icon: <FaMoneyCheckAlt /> },
      { label: 'Employee Records', icon: <FaUsers /> },
      { label: 'Tax & Compliance', icon: <FaFileInvoiceDollar /> },
      { label: 'Attendance & Leaves', icon: <FaCalendarCheck /> },
      { label: 'Payslip Generation', icon: <FaFileAlt /> },
    ],
    rightImage: '/drive/drive5.png',
  },
  {
    label: 'ImssPay',
    labelIcon: <FaCreditCard />,
    industries: [
      { label: 'Payments Gateway', icon: <FaCreditCard /> },
      { label: 'UPI / QR Payments', icon: <FaQrcode /> },
      { label: 'Reconciliation', icon: <FaBalanceScale /> },
      { label: 'Settlement Reports', icon: <FaFileInvoice /> },
      { label: 'Secure Transactions', icon: <FaShieldAlt /> },
    ],
    rightImage: '/drive/drive3.png',
  },
]

export default function MargERP() {
  const [selected, setSelected] = useState(solutions[0])

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center px-4 py-12 bg-orange-700"
    >
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-white uppercase">
        Drive your <span className="text-blue-500">business</span> with{' '}
        <span className="text-blue-500">IMSS-ERP</span>
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {solutions.map((sol) => {
          const active = sol.label === selected.label
          return (
            <motion.button
              key={sol.label}
              onClick={() => setSelected(sol)}
              aria-pressed={active}
              whileHover={{ scale: 1.08 }}
              className={`px-4 py-2 rounded-full border-2 text-sm font-semibold flex items-center gap-2 transition-all ${
                active
                  ? 'bg-orange-600 text-white border-orange-600 shadow-md'
                  : 'bg-white text-orange-600 border-gray-300 hover:shadow'
              }`}
            >
              <span className="text-xl">{sol.labelIcon}</span>
              {sol.label}
            </motion.button>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl border-1 border-black rounded-3xl p-6 shadow-lg bg-white">
        {/* Left Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 flex-1">
          {selected.industries.map((ind) => (
            <motion.div
              key={ind.label}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center bg-white rounded-xl  p-4  transition-all"
            >
              <div className="text-orange-600 text-4xl mb-3">{ind.icon}</div>
              <p className="text-sm font-medium">{ind.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Image with animation */}
        {selected.rightImage && (
          <motion.div
            key={selected.label}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex justify-center items-center"
          >
            <Image
              src={selected.rightImage}
              alt={selected.label}
              width={400}
              height={400}
              className="max-h-[400px] object-contain"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
