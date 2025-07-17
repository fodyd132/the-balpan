'use client'

import Link from "next/link"

export default function Header() {
    return(
        <header className="w-full py-8 px-6 bg-white shadow-md">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                    더 발판
                </Link>
                <nav className="space-x-6">
                    <Link href="/about" className="text-gray-700 hover:text-black">회사 소개</Link>
                    <Link href="/product" className="text-gray-700 hover:text-black">제품 소개</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-black">문의하기</Link>
                </nav>
            </div>
        </header>
    )
}