import { cn } from '@/lib/utils'
import Image from 'next/image'

interface AvatarProps {
  src: string
  alt?: string
  size?: number
  className?: string
  name?: string
  showDropdown?: boolean
  onClick?: () => void
}

export function Avatar({
  src,
  alt = 'Avatar',
  size = 36,
  className,
  name,
  showDropdown = false,
  onClick,
}: AvatarProps) {
  if (name || showDropdown) {
    return (
      <div className="flex items-center gap-[4px]">
        <div
          className="bg-rock-background hover:bg-rock-secondary-50 flex cursor-pointer items-center gap-[4px] rounded-full py-[2px] pr-[2px] pl-[12px] transition-colors"
          onClick={onClick}
        >
          {name && <span className="text-strong mr-[4px] text-sm font-bold">{name}</span>}
          <div
            className={cn('overflow-hidden rounded-full', className)}
            style={{ width: size, height: size }}
          >
            <Image
              src={src}
              alt={alt}
              width={size}
              height={size}
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
        {showDropdown && (
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.52865 0.528636C8.789 0.268287 9.21101 0.268287 9.47136 0.528636C9.73171 0.788986 9.73171 1.21099 9.47136 1.47134L5.47136 5.47134C5.21101 5.73169 4.789 5.73169 4.52865 5.47134L0.528652 1.47134L0.483079 1.42056C0.269512 1.15871 0.284575 0.772713 0.528652 0.528636C0.77273 0.284559 1.15873 0.269496 1.42058 0.483063L1.47136 0.528636L5.00001 4.05728L8.52865 0.528636Z"
              fill="#3D444D"
            />
          </svg>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn('overflow-hidden rounded-full', className)}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} width={size} height={size} className="object-cover" />
    </div>
  )
}
