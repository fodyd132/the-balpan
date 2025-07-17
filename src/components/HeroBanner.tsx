'use client'

import Image from 'next/image'
import Link from 'next/link'

interface HeroBannerProps {
  title: string
  subtitle?: string
  imageUrl: string
  breadcrumb?: { label: string; href?: string }[]  // 추가
}

export default function HeroBanner({ title, subtitle, imageUrl, breadcrumb }: HeroBannerProps) {
  return (
    <div className="relative w-full h-72 md:h-96">
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

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg md:text-xl">{subtitle}</p>}
      </div>
    </div>
  )
}