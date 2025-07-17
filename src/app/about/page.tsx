import HeroBanner from '@/components/HeroBanner'

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        title="About Us"
        subtitle="더 발판을 만드는 사람들"
        imageUrl="/images/about-hero.jpg" // 원하는 이미지 경로로 교체
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">브랜드 스토리</h2>
        <p className="text-gray-700 text-lg mb-4">
          더 발판은 ‘작은 디테일이 삶을 바꾼다’는 철학을 바탕으로 출발했습니다.
          우리는 평범한 발판이 사람들의 건강과 효율에 얼마나 큰 영향을 줄 수 있는지 실험해왔습니다.
        </p>
        {/* 추가 내용 계속 */}
      </main>
    </>
  )
}