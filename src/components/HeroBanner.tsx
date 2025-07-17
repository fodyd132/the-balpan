import Image from 'next/image'

interface HeroBannerProps {
  title: string
  subtitle?: string
  imageUrl: string
}

export default function HeroBanner({ title, subtitle, imageUrl }: HeroBannerProps) {
  return (
    <div className="relative w-full h-72 md:h-96">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg md:text-xl">{subtitle}</p>}
      </div>
    </div>
  )
}
