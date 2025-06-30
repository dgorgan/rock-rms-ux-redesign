import { cn } from '@/lib/utils'
import Image from 'next/image'

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
        {showDropdown && (
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8ZM8 10C3.58172 10 0 13.5817 0 18C0 19.1046 0.89543 20 2 20H14C15.1046 20 16 19.1046 16 18C16 13.5817 12.4183 10 8 10Z"
              fill="currentColor"
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
