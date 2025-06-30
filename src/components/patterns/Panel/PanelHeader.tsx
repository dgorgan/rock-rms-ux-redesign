import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PanelHeaderProps {
  title: ReactNode
  actions?: ReactNode
  className?: string
}

export function PanelHeader({ title, actions, className }: PanelHeaderProps) {
  return (
    <div
      className={cn(
        'border-rock-secondary-200 flex h-[56px] items-center justify-between border-b px-6 pr-[17px]',
        className
      )}
    >
      <div className="text-strong text-lg font-bold">{title}</div>
      {actions && <div className="flex items-center gap-1">{actions}</div>}
    </div>
  )
}
