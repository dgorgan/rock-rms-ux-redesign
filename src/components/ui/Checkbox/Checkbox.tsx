import { cn } from '@/lib/utils'

interface CheckboxProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
  id?: string
}

export function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  className,
  id,
}: CheckboxProps) {
  const checkmarkSvg =
    "data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/></svg>"

  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={e => onChange?.(e.target.checked)}
      disabled={disabled}
      className={cn(
        'focus:ring-rock-primary-500 h-4 w-4 cursor-pointer rounded bg-white focus:ring-2 focus:ring-offset-2',
        'checked:bg-rock-primary-500 checked:border-rock-primary-500',
        'border-rock-secondary-500 appearance-none border-2',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
      style={{
        backgroundImage: checked ? `url("${checkmarkSvg}")` : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '12px 12px',
      }}
    />
  )
}
