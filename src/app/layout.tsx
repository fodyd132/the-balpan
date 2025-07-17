import './globals.css'
import type { Metadata } from 'next'
import Header from '@/app/components/Header'

export const metadata: Metadata = {
  title: '더 발판',
  description: '당신의 일상을 더 높여주는 발판',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  )
}
