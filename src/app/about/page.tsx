'use client'

import HeroBanner from '@/components/HeroBanner'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About Us"
        subtitle="더 발판을 만드는 사람들"
        imageUrl="/images/about.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      <motion.main
        className="max-w-3xl mx-auto px-4 sm:px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">브랜드 스토리</h2>

        <p className="text-gray-700 text-base sm:text-lg mb-4">
          더 발판은 ‘작은 디테일이 삶을 바꾼다’는 철학을 바탕으로 시작되었습니다.  
          평범한 생활 속 불편함을 관찰하며, 단순한 제품에 진심을 담아 더 나은 일상을 제안하고 있습니다.
        </p>

        <p className="text-gray-700 text-base sm:text-lg mb-4">
          우리는 서 있는 모든 공간에 더 편안한 환경을 제공하고 싶습니다.  
          오랜 시간 서 있는 부모님, 주방에서 일하는 사장님, 업무에 집중하는 회사원 모두에게 더 발판이 편안함을 선사합니다.
        </p>

        <p className="text-gray-700 text-base sm:text-lg">
          앞으로도 더 발판은 ‘작지만 꼭 필요한 것’을 만들어가겠습니다.
        </p>
      </motion.main>
    </>
  )
}