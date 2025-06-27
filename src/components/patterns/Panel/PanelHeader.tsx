import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PanelHeaderProps {
  children: ReactNode
  actions?: ReactNode
  className?: string
}

export function PanelHeader({ children, actions, className }: PanelHeaderProps) {
  return (
    <div className={cn('mb-4 border-b border-[#F8F8FC] pb-2', className)}>
      <div className="flex items-center justify-between">
        <div className="text-strong text-lg font-bold">{children}</div>
        {actions && <div className="gap-sm flex items-center">{actions}</div>}
      </div>
    </div>
  )
}
