import Image from 'next/image'

export default function ProductPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">제품 소개</h1>

      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">더 발판은 어떤 제품인가요?</h2>
          <p className="text-gray-700 text-lg">
            더 발판은 신발을 꺠끗하게 세척해줍니다. 또한,
            미끄럼 방지, 견고한 재질, 감성적인 디자인까지 갖춘 프리미엄 발판입니다.
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
          <h3 className="text-xl font-bold mb-2">획기적인 설계</h3>
          <p className="text-gray-700">자동 및 반자동으로 조절하여 신발을 세척해줍니다.</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">미끄럼 방지</h3>
          <p className="text-gray-700">바닥 마찰에 강한 소재로 제작되어 미끄럼 걱정 없이 사용할 수 있습니다.</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">감성 디자인</h3>
          <p className="text-gray-700">인테리어와 잘 어우러지는 디자인으로 생활 공간에 자연스럽게 녹아듭니다.</p>
        </div>
      </section>
    </main>
  )
}
