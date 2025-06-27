import { AppShell } from '@/components/layout/AppShell'
import { GroupDetail } from '@/features/group-detail/GroupDetail'

export default function Home() {
  return (
    <AppShell>
      <GroupDetail />
    </AppShell>
  )
}
