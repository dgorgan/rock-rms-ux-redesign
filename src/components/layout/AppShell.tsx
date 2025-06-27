'use client'

import { ReactNode } from 'react'
import { AppSidebar } from '@/components/layout/AppSidebar'
import { AppHeader } from '@/components/layout/AppHeader'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="bg-rock-background flex min-h-screen">
      <AppSidebar />
      <AppHeader />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <main className="gap-xl pt-[100px] pb-[24px]">{children}</main>
      </div>
    </div>
  )
}
