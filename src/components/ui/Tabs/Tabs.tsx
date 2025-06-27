'use client'

import { ReactNode } from 'react'
import { TabsContext } from './useTabsContext'

type TabsProps = {
  activeTab: string
  onChange: (value: string) => void
  children: ReactNode
}

export function Tabs({ activeTab, onChange, children }: TabsProps) {
  return <TabsContext.Provider value={{ activeTab, onChange }}>{children}</TabsContext.Provider>
}
