import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface RockGridCellProps {
  children?: ReactNode
  className?: string
  colSpan?: number
}

export function RockGridCell({ children, className, colSpan }: RockGridCellProps) {
  return (
    <td className={cn('text-rock-secondary-700 px-4 py-2 text-sm', className)} colSpan={colSpan}>
      {children}
    </td>
  )
}
