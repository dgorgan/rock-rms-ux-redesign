import { createContext, useContext } from 'react'

type TabsContextType = {
  activeTab: string
  onChange: (value: string) => void
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined)

export function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) throw new Error('Tab components must be used inside <Tabs />')
  return context
}
