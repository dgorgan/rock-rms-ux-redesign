import { cn } from '@/lib/utils'
import Image from 'next/image'

interface AvatarProps {
  src: string
  alt?: string
  size?: number
  className?: string
}

export function Avatar({ src, alt = 'Avatar', size = 36, className }: AvatarProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-full', className)}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} width={size} height={size} className="object-cover" />
    </div>
  )
}
