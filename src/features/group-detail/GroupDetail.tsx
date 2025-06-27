import { GroupOverviewPanel } from './GroupOverviewPanel'
import { GroupPermissionsPanel } from './GroupPermissionsPanel'
import { useGroupDetail } from './hooks'

interface GroupDetailProps {
  groupId: string
}

export function GroupDetail({ groupId }: GroupDetailProps) {
  const { channel, permissions } = useGroupDetail(groupId)

  return (
    <div className="space-y-lg">
      <GroupOverviewPanel channel={channel} />
      <GroupPermissionsPanel permissions={permissions} />
    </div>
  )
}
