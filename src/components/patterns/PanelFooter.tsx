import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PanelFooterProps {
  children: ReactNode
  className?: string
}

export function PanelFooter({ children, className }: PanelFooterProps) {
  return (
    <div
      className={cn(
        'mt-6 flex items-center justify-between border-t border-[#F8F8FC] pt-4',
        className
      )}
    >
      {children}
    </div>
  )
}
