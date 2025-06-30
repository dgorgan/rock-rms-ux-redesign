import React from 'react'
import { cn } from '@/lib/utils'
import { useTabsContext } from './Tabs'

interface TabTriggerProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function TabTrigger({ value, children, className }: TabTriggerProps) {
  const { activeTab, onChange } = useTabsContext()
  const isActive = activeTab === value

  return (
    <button
      onClick={() => onChange(value)}
      className={cn(
        'relative mr-6 flex h-full cursor-pointer items-center px-0 py-3 text-sm font-semibold transition-colors',
        isActive ? 'text-rock-primary-500' : 'text-rock-secondary-500 hover:text-rock-primary-500',
        className
      )}
    >
      {children}
      {isActive && (
        <div className="bg-rock-primary-500 absolute right-[-8px] bottom-[-5px] left-[-8px] h-[5px]" />
      )}
    </button>
  )
}
