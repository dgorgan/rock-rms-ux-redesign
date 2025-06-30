import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PanelProps {
  children: ReactNode
  className?: string
}

export function Panel({ children, className }: PanelProps) {
  return (
    <div className={cn('overflow-hidden rounded-md border border-[#D9D9E3] bg-white', className)}>
      {children}
    </div>
  )
}
