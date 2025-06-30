'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TabsContextValue {
  activeTab: string
  onChange: (tabId: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

export function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tab components must be used within a Tabs provider')
  }
  return context
}

interface TabsProps {
  activeTab: string
  onChange: (tabId: string) => void
  children: ReactNode
  className?: string
}

export function Tabs({ activeTab, onChange, children, className }: TabsProps) {
  return (
    <TabsContext.Provider value={{ activeTab, onChange }}>
      <div className={cn('', className)}>{children}</div>
    </TabsContext.Provider>
  )
}
