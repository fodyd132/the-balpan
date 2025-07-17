import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">더 발판</h1>
        <p className="text-gray-600 text-lg">당신의 일상을 더 높여주는 발판</p>
        <a href="/about" className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
          회사 소개 보기
        </a>
      </div>
    </main>
  )
}