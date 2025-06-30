import { cn } from '@/lib/utils'
import { IconButton } from '@/components/ui/IconButton'

interface SearchBoxProps {
  placeholder?: string
  dropdownValue?: string
  onSearch?: (value: string) => void
  className?: string
}

export function SearchBox({
  placeholder = 'Placeholder...',
  dropdownValue = 'Name',
  onSearch,
  className,
}: SearchBoxProps) {
  return (
    <div
      className={cn(
        'border-rock-secondary-200 bg-rock-background flex items-center overflow-hidden rounded-full border',
        className
      )}
    >
      <div className="border-rock-secondary-200 flex items-center border-r bg-white px-4 py-2">
        <span className="text-rock-secondary-700 mr-2 text-sm font-medium">{dropdownValue}</span>
        <IconButton
          icon="chevron-down"
          size="sm"
          variant="default"
          className="text-rock-secondary-500"
        />
      </div>

      <div className="flex flex-1 items-center px-4">
        <input
          type="text"
          placeholder={placeholder}
          className="text-rock-secondary-700 placeholder-rock-secondary-400 flex-1 border-none bg-transparent text-sm outline-none"
          onChange={e => onSearch?.(e.target.value)}
        />
      </div>
    </div>
  )
}
