import { cn } from '@/lib/utils'

interface SearchInputProps {
  placeholder?: string
  className?: string
  autoFocus?: boolean
}

export function SearchInput({
  placeholder = 'Search',
  className,
  autoFocus = false,
}: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={cn(
        'border-rock-primary-500 focus:border-rock-primary-600 h-[56px] w-64 border-2 px-3 text-sm focus:outline-none',
        className
      )}
      autoFocus={autoFocus}
    />
  )
}
