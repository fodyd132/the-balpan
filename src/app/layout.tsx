import './globals.css'
import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: '더 발판',
  description: '당신의 일상을 더 높여주는 발판',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
