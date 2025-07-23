'use client'

import HeroBanner from '@/components/HeroBanner'
import { motion } from 'framer-motion'

export default function PerformancePage() {
  return (
    <>
      <HeroBanner
        title="Performance"
        subtitle="더 발판의 주요 성과"
        imageUrl="/images/performance.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Performance' }
        ]}
      />

      <motion.main
        className="max-w-4xl mx-auto px-4 sm:px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-gray-900">성과</h2>

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            '✅ 누적 판매 12,000개 달성',
            '✅ 고객 만족도 98% (2025 상반기 기준)',
            '✅ 오프라인 매장 입점 (서울/부산/광주)',
            '✅ TV 광고 캠페인 진행 (2025.06)',
          ].map((text, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-gray-100 rounded-xl shadow transition-all duration-300"
            >
              {text}
            </motion.div>
          ))}
        </motion.section>
      </motion.main>
    </>
  )
}