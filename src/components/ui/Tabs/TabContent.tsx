import { ReactNode } from 'react'
import { useTabsContext } from './useTabsContext'

type TabContentProps = {
  value: string
  children: ReactNode
}

export function TabContent({ value, children }: TabContentProps) {
  const { activeTab } = useTabsContext()

  if (activeTab !== value) return null

  return <>{children}</>
}
