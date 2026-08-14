import Image from 'next/image'
import ImageCredit from '@/components/ImageCredit'

interface RegionImageProps {
  src: string
  alt: string
  credit: string
  height?: number
  className?: string
}

export default function RegionImage({ src, alt, credit, height = 280, className }: RegionImageProps) {
  return (
    <div className={className}>
      <div style={{ position: 'relative', width: '100%', height: `${height}px`, borderRadius: '8px', overflow: 'hidden' }}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <ImageCredit credit={credit} />
    </div>
  )
}
