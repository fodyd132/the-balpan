import HeroBanner from '@/components/HeroBanner'

export default function AboutHistoryPage() {
  return (
    <>
      <HeroBanner
        title="Company History"
        subtitle="더 발판의 걸어온 길"
        imageUrl="/images/history.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'History' }
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">주요 연혁</h2>

        <ul className="space-y-4 text-gray-700 text-lg">
          <li>2023.12 - 더 발판 기획 및 시제품 제작</li>
          <li>2024.03 - 공식 출시 및 자사몰 오픈</li>
          <li>2024.08 - 누적 판매 1만개 돌파</li>
          <li>2025.02 - 오프라인 입점 (서울 3곳)</li>
          <li>2025.06 - 브랜드 리뉴얼 및 TV광고 론칭</li>
        </ul>
      </main>
    </>
  )
}