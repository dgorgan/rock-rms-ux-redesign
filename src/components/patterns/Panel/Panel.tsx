import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PanelProps {
  children: ReactNode
  className?: string
}

export function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={cn('border-rock-secondary-100 rounded-lg border bg-white shadow-sm', className)}
    >
      {children}
    </div>
  )
}
