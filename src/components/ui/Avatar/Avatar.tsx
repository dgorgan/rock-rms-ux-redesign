import { cn } from '@/lib/utils'
import Image from 'next/image'
import { IconButton } from '../IconButton'

interface AvatarProps {
  src?: string
  alt?: string
  size?: number
  className?: string
  name?: string
  showDropdown?: boolean
  onClick?: () => void
  variant?: 'default' | 'table'
}

export function Avatar({
  src,
  alt = 'Avatar',
  size = 36,
  className,
  name,
  showDropdown = false,
  onClick,
  variant = 'default',
}: AvatarProps) {
  if (name || showDropdown) {
    return (
      <div className="flex items-center gap-[4px]">
        <div
          className={cn(
            'hover:bg-rock-secondary-50 flex cursor-pointer items-center gap-[4px] rounded-full py-[2px] pr-[2px] pl-[12px] transition-colors',
            variant === 'table'
              ? 'border-rock-secondary-200 border bg-white'
              : 'bg-[var(--color-rock-background)]'
          )}
          onClick={onClick}
        >
          {name && <span className="text-strong mr-[4px] text-sm font-bold">{name}</span>}
          <div
            className={cn('overflow-hidden rounded-full', className)}
            style={{ width: size, height: size }}
          >
            {src ? (
              <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                unoptimized
                className="object-cover"
              />
            ) : (
              <div className="text-rock-secondary-600 border-rock-secondary-200 flex h-full w-full items-center justify-center rounded-full border bg-white text-sm font-semibold">
                {name ? name.charAt(0).toUpperCase() : '?'}
              </div>
            )}
          </div>
        </div>
        {showDropdown && <IconButton icon="chevron-down" size="sm" />}
      </div>
    )
  }

  return (
    <div
      className={cn('overflow-hidden rounded-full', className)}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image src={src} alt={alt} width={size} height={size} className="object-cover" />
      ) : (
        <div className="text-rock-secondary-600 border-rock-secondary-200 flex h-full w-full items-center justify-center rounded-full border bg-white text-sm font-semibold">
          {name ? name.charAt(0).toUpperCase() : '?'}
        </div>
      )}
    </div>
  )
}
