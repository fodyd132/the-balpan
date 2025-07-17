import HeroBanner from '@/components/HeroBanner'
import { FaInstagram, FaEnvelope, FaCommentDots } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <>
      <HeroBanner
        title="Contact"
        subtitle="언제든지 편하게 문의하세요"
        imageUrl="/images/contact.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">문의하기</h2>

        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <FaEnvelope className="text-xl text-gray-600" />
            <span className="text-gray-800 text-lg">
              이메일: <a href="mailto:contact@balpan.co.kr" className="text-blue-600 hover:underline">contact@balpan.co.kr</a>
            </span>
          </li>

          <li className="flex items-center space-x-4">
            <FaInstagram className="text-xl text-gray-600" />
            <span className="text-gray-800 text-lg">
              인스타그램: <a href="https://instagram.com/thebalpan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@thebalpan</a>
            </span>
          </li>

          <li className="flex items-center space-x-4">
            <FaCommentDots className="text-xl text-gray-600" />
            <span className="text-gray-800 text-lg">
              카카오톡 문의: <a href="https://pf.kakao.com/_thebalpan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">더 발판 카카오톡 채널</a>
            </span>
          </li>
        </ul>
      </main>
    </>
  )
}
