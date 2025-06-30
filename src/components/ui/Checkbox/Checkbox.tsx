import { cn } from '@/lib/utils'

interface CheckboxProps {
  checked?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
  id?: string
  name?: string
}

export function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  className,
  id,
  name,
}: CheckboxProps) {
  const base =
    'h-4 w-4 rounded border border-rock-secondary-300 text-rock-primary-500 focus:ring-rock-primary-500 focus:ring-2 focus:ring-offset-2'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked)
  }

  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      ref={el => {
        if (el) el.indeterminate = indeterminate
      }}
      onChange={handleChange}
      disabled={disabled}
      className={cn(base, disabled && 'cursor-not-allowed opacity-50', className)}
    />
  )
}
