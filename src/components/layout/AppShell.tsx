'use client'

import { ReactNode } from 'react'
import { AppSidenav } from '@/components/layout/AppSidenav'
import { AppHeader } from '@/components/layout/AppHeader'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="bg-rock-background flex min-h-screen py-2">
      <AppSidenav />
      <AppHeader />
      <div className="flex flex-1 flex-col overflow-y-auto">
        <main className="gap-xl p-[24px] pt-[100px]">{children}</main>
      </div>
    </div>
  )
}
