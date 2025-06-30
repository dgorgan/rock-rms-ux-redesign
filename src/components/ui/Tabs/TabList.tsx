import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TabListProps {
  children: ReactNode
  className?: string
}

export function TabList({ children, className }: TabListProps) {
  return (
    <div
      className={cn(
        'border-b-rock-background-secondary bg-rock-background h-[57px] border-b-[5px]',
        className
      )}
    >
      <div className="flex h-full pl-6">{children}</div>
    </div>
  )
}
