import { FaInstagram, FaEnvelope, FaCommentDots } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">문의하기</h1>

      <p className="text-gray-700 text-lg mb-6">
        제품에 대해 궁금한 점이 있으시면 언제든지 아래 방법으로 문의해주세요.
      </p>

      <ul className="space-y-6">
        <li className="flex items-center space-x-4">
          <FaEnvelope className="text-xl text-gray-600" />
          <span className="text-gray-800 text-lg">이메일: <a href="mailto:contact@balpan.co.kr" className="text-blue-600 hover:underline">contact@balpan.co.kr</a></span>
        </li>

        <li className="flex items-center space-x-4">
          <FaInstagram className="text-xl text-gray-600" />
          <span className="text-gray-800 text-lg">인스타그램: <a href="https://instagram.com/thebalpan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@thebalpan</a></span>
        </li>

        <li className="flex items-center space-x-4">
          <FaCommentDots className="text-xl text-gray-600" />
          <span className="text-gray-800 text-lg">
            카카오톡 문의: <a href="https://pf.kakao.com/_thebalpan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">더 발판 카카오톡 채널</a>
          </span>
        </li>
      </ul>
    </main>
  )
}
