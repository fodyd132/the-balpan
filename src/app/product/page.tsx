import HeroBanner from '@/components/HeroBanner'
import Image from 'next/image'

export default function ProductPage() {
  return (
    <>
      <HeroBanner
        title="Product"
        subtitle="더 발판 제품을 소개합니다"
        imageUrl="/images/product.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">왜 더 발판인가요?</h2>
            <p className="text-gray-700 text-lg">
              더 발판은 장시간 서 있어야 하는 환경에서 편안함을 제공하는 제품입니다.
              인체공학 설계, 미끄럼 방지, 감각적인 디자인으로 많은 분들의 일상에 변화를 주고 있습니다.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/images/product-main.jpg"
              alt="더 발판 제품 이미지"
              fill
              className="object-cover rounded-xl shadow"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">인체공학 설계</h3>
            <p className="text-gray-700">
              자세를 개선하고 다리 피로도를 낮춰줍니다.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">미끄럼 방지</h3>
            <p className="text-gray-700">
              안전한 고정력으로 어디서든 안심하고 사용하세요.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">감성 디자인</h3>
            <p className="text-gray-700">
              어느 공간에서도 자연스럽게 어울리는 미니멀 스타일.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
