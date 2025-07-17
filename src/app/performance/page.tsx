import HeroBanner from '@/components/HeroBanner'

export default function PerformancePage() {
  return (
    <>
      <HeroBanner
        title="Performance"
        subtitle="더 발판의 주요 성과"
        imageUrl="/images/performance.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Performance' }
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8">성과</h2>

        <ul className="grid md:grid-cols-2 gap-6 text-gray-800 text-lg">
          <li className="bg-gray-100 p-6 rounded-xl shadow">
            ✅ 누적 판매 12,000개 달성
          </li>
          <li className="bg-gray-100 p-6 rounded-xl shadow">
            ✅ 고객 만족도 98% (2025 상반기 기준)
          </li>
          <li className="bg-gray-100 p-6 rounded-xl shadow">
            ✅ 오프라인 매장 입점 (서울/부산/광주)
          </li>
          <li className="bg-gray-100 p-6 rounded-xl shadow">
            ✅ TV 광고 캠페인 진행 (2025.06)
          </li>
        </ul>
      </main>
    </>
  )
}