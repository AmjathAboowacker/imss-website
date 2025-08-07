'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    value: 12,
    label: 'Online ERP Systems',
  },
  {
    value: 200,
    label: 'Offline POS with ERP Systems',
  },
  {
    value: 5,
    label: 'Websites Developed',
  },
  {
    value: 5,
    label: 'Mobile Applications',
  },
  {
    value: 3,
    label: 'Develop ERP systems',
  },
];

export default function StatsSection() {
  return (
    <section className="py-2">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-white bg-orange-600 py-2 mx-4 rounded-full">
        Empowering Businesses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-8xl mx-auto rounded-2xl p-8 px-30">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-xl border-orange-500 border-1 shadow hover:shadow-lg transition p-6 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view and only once
          >
            <h3 className="text-5xl font-bold mt-4 text-black dark:text-gray-100">
              <CountUp end={item.value} duration={2} start={0} />
            </h3>
            <p className="uppercase text-sm font-bold text-black dark:text-gray-400 mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
