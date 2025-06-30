'use client'

import { useState } from 'react'
import { Panel, PanelHeader, PanelFooter } from '@/components/patterns/Panel'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'
import { SearchInput } from '@/components/ui/SearchInput'
import { Tabs, TabList, TabTrigger } from '@/components/patterns/Tabs'
import { ChannelOverview } from './ChannelOverview'
import { ChannelPermissions } from './ChannelPermissions'
import { useGroupDetail } from '../hooks'

export function GroupChannelPanel() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'permissions'>('overview')
  const [showSearch, setShowSearch] = useState(false)

  const { channel, permissions } = useGroupDetail('worship-team')

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId as 'overview' | 'permissions')
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  const headerActions = showSearch ? (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        <IconButton icon="search" onClick={toggleSearch} />
      </div>
      <SearchInput autoFocus />
      <div className="flex gap-1">
        <IconButton icon="eye" />
        <IconButton icon="settings" />
        <IconButton icon="expand" />
        <IconButton icon="more" />
        <IconButton icon="chevron-down" />
      </div>
    </div>
  ) : (
    <div className="flex gap-1">
      <IconButton icon="search" onClick={toggleSearch} />
      <IconButton icon="eye" />
      <IconButton icon="settings" />
      <IconButton icon="expand" />
      <IconButton icon="more" />
      <IconButton icon="chevron-down" />
    </div>
  )

  const footerActions = (
    <>
      <Button variant="primary">Edit</Button>
      <Button variant="link">Cancel</Button>
    </>
  )

  return (
    <Panel>
      <PanelHeader title="Group Channel" actions={headerActions} />

      <Tabs activeTab={selectedTab} onChange={handleTabChange}>
        <TabList>
          <TabTrigger value="overview">Basic Info</TabTrigger>
          <TabTrigger value="permissions">Permissions</TabTrigger>
        </TabList>
      </Tabs>

      <div className="p-6">
        {selectedTab === 'overview' && <ChannelOverview channel={channel} />}
        {selectedTab === 'permissions' && <ChannelPermissions permissions={permissions} />}
      </div>

      <PanelFooter
        footerActions={footerActions}
        groupEditButtons={<IconButton icon="lock" variant="bordered" />}
      />
    </Panel>
  )
}
