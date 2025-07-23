'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroBannerProps {
  title: string
  subtitle?: string
  imageUrl: string
  breadcrumb?: { label: string; href?: string }[]
}

export default function HeroBanner({ title, subtitle, imageUrl, breadcrumb }: HeroBannerProps) {
  return (
    <div className="relative w-full h-72 md:h-96">
      {/* 어두운 오버레이 추가 */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        className="object-cover brightness-75"
      />

      {/* breadcrumb */}
      {breadcrumb && (
        <div className="absolute top-4 left-4 text-white text-sm space-x-2 z-10">
          {breadcrumb.map((item, i) => (
            <span key={i}>
              {i > 0 && '› '}
              {item.href ? (
                <Link href={item.href} className="hover:underline">{item.label}</Link>
              ) : (
                <span className="text-gray-300">{item.label}</span>
              )}
            </span>
          ))}
        </div>
      )}

      {/* 애니메이션이 적용된 타이틀 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-2 text-base sm:text-lg md:text-xl text-white"
          >
            {subtitle}
          </motion.p>
        )}
      </div>{/* 애니메이션이 적용된 타이틀 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-2 text-base sm:text-lg md:text-xl text-white"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}