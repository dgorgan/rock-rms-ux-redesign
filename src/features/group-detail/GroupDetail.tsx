'use client'

import { GroupChannelPanel } from './channel-panel'
import { GroupMemberPanel } from './member-panel'

export function GroupDetail() {
  return (
    <div className="space-y-12">
      <GroupChannelPanel />
      <GroupMemberPanel />
    </div>
  )
}
