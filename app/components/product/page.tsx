'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Inventory Management',
    short: 'Inventory Management System',
    full: 'CloudX Pro offers scalable cloud storage with zero downtime, automated backups, and advanced encryption.',
    features: [
      'Real-time stock level tracking',
      'Barcode/RFID scanning integration',
      'Low stock alerts and restocking automation',
      'Multi-warehouse support',
    ],
    image: '/products/inventory02.png',
  },
  {
    id: 2,
    name: 'Sales & Customer',
    short: 'Sales & Customer Management System',
    full: 'SecurePay offers PCI-compliant APIs for web/mobile apps, supporting multi-currency and real-time fraud detection.',
    features: [
      'Integrated CRM with contact management',
      'Sales pipeline and opportunity tracking',
      'Automated invoice and billing',
      'Real-time transaction monitoring',
    ],
    image: '/products/sales.png',
  },
  {
    id: 3,
    name: 'Financial Accounting',
    short: 'Financial Accounting System',
    full: 'IMSS ERP integrates HR, payroll, inventory, and accounting modules in a seamless, user-friendly dashboard.',
    features: [
      'Double-entry accounting system',
      'Budgeting and forecasting tools',
      'Tax calculation and compliance',
      'Bank reconciliation and audit logs',
    ],
    image: '/products/financial.png',
  },
  {
    id: 4,
    name: 'Profit Analysis',
    short: 'Profit analysis tool',
    full: 'Profit Analysis provides insights into revenue streams, cost management, and profitability metrics for informed decision-making.',
    features: [
      'Revenue stream segmentation',
      'Cost trend analysis',
      'Profit margin tracking',
      'Visual dashboards and reports',
    ],
    image: '/products/profit02.png',
  },
  {
    id: 5,
    name: 'Comprehensive Reporting',
    short: 'Comprehensive Reporting System',
    full: 'Comprehensive Reporting provides advanced analytics and reporting tools for HR, finance, and operations.',
    features: [
      'Custom report builder',
      'Data visualization tools',
      'Cross-department insights',
      'Scheduled email reports',
    ],
    image: '/products/reporting.png',
  },
  {
    id: 6,
    name: 'Purchasing Approval',
    short: 'Purchasing Approval System',
    full: 'Purchasing Approval streamlines the procurement process with automated workflows, approval routing, and budget tracking.',
    features: [
      'Multi-level approval workflows',
      'Budget vs spend monitoring',
      'Purchase request automation',
      'Audit trail for compliance',
    ],
    image: '/products/purchasing02.png',
  },
  {
    id: 7,
    name: 'Voucher Management',
    short: 'Voucher Management System',
    full: 'Voucher Management System streamlines the process of creating, distributing, and redeeming vouchers for educational institutions.',
    features: [
      'Bulk voucher generation',
      'Student-wise tracking',
      'Usage and redemption reports',
      'Custom expiration rules',
    ],
    image: '/products/vouchar.png',
  },
  {
    id: 8,
    name: 'Leader Management',
    short: 'Leader Management System',
    full: 'Leader Management System provides tools for tracking and managing team performance, goals, and feedback.',
    features: [
      'Performance goal tracking',
      'Leaderboard and KPIs',
      'Team feedback and review',
      'Quarterly performance analysis',
    ],
    image: '/products/leader.png',
  },
]

export default function ProductPage() {
  const [selectedId, setSelectedId] = useState<number>(1)
  const selected = products.find((p) => p.id === selectedId)!
  const detailRef = useRef<HTMLDivElement>(null)

  const handleSelect = (id: number) => {
    setSelectedId(id)
    detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 mt-[80px]">
      <h2 className="text-4xl font-bold text-center mb-10">Our Software Products</h2>

      {/* Details Panel */}
      <div className="bg-orange-200 p-6 rounded-xl shadow mb-10">
        <div
          ref={detailRef}
          className="flex flex-col md:flex-row gap-6 items-start"
        >
          <Image
            src={selected.image}
            alt={selected.name}
            width={300}
            height={300}
            className="rounded-xl object-cover w-auto h-auto px-20"
          />
          <div>
            <h3 className="text-2xl font-bold text-black mb-2">{selected.name}</h3>
            <p className="text-black mb-4">{selected.full}</p>
            {selected.features && (
              <ul className="list-disc list-inside text-black mb-4 space-y-1">
                {selected.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
            <a
              href="/components/request"
              className="inline-block px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => handleSelect(product.id)}
            className={`border rounded-xl p-3 text-center transition hover:shadow ${
              selectedId === product.id ? 'border-blue-600 bg-white shadow-md' : 'bg-white'
            }`}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="mx-auto mb-2 object-contain w-auto h-auto"
            />
            <h4 className="text-sm font-semibold text-gray-800">{product.name}</h4>
          </button>
        ))}
      </div>
    </section>
  )
}