'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 bg-gray-100 mt-20">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-600 space-y-2">
        <div className="flex justify-center space-x-4 text-sm">
          <Link href="/about" className="hover:underline">회사 소개</Link>
          <Link href="/product" className="hover:underline">제품 소개</Link>
          <Link href="/contact" className="hover:underline">문의하기</Link>
        </div>

        <p>© {new Date().getFullYear()} 더 발판. All rights reserved.</p>

        <p>사업자등록번호: 123-45-67890 | 연락처: contact@balpan.co.kr</p>
      </div>
    </footer>
  )
}
