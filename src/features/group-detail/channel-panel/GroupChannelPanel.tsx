'use client'

import { useState } from 'react'
import { Panel, PanelContainer } from '@/components/patterns/Panel'
import { Button } from '@/components/ui/Button'
import { ChannelOverview } from './ChannelOverview'
import { ChannelPermissions } from './ChannelPermissions'
import { useGroupDetail } from '../hooks'

export function GroupChannelPanel() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'permissions'>('overview')

  const { channel, permissions } = useGroupDetail('worship-team')

  const headerActions = (
    <div className="text-rock-secondary-400 flex gap-1">
      <button className="hover:bg-rock-secondary-50 rounded p-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
      </button>
      <button className="hover:bg-rock-secondary-50 rounded p-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
        </svg>
      </button>
      <button className="hover:bg-rock-secondary-50 rounded p-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
        </svg>
      </button>
      <button className="hover:bg-rock-secondary-50 rounded p-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>
      <button className="hover:bg-rock-secondary-50 rounded p-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </button>
    </div>
  )

  return (
    <Panel title="Heading" actions={headerActions} noBodyWrapper>
      <PanelContainer>
        {/* Tabs */}
        <div className="border-rock-secondary-100 -mx-6 border-b">
          <div className="flex px-6">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`mr-6 border-b-[3px] px-0 py-3 text-sm font-semibold transition-colors ${
                selectedTab === 'overview'
                  ? 'text-rock-primary-500 border-rock-primary-500'
                  : 'text-rock-secondary-500 hover:text-rock-primary-500 border-transparent'
              }`}
            >
              Basic Info
            </button>
            <button
              onClick={() => setSelectedTab('permissions')}
              className={`border-b-[3px] px-0 py-3 text-sm font-semibold transition-colors ${
                selectedTab === 'permissions'
                  ? 'text-rock-primary-500 border-rock-primary-500'
                  : 'text-rock-secondary-500 hover:text-rock-primary-500 border-transparent'
              }`}
            >
              Permissions
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && <ChannelOverview channel={channel} />}
        {selectedTab === 'permissions' && <ChannelPermissions permissions={permissions} />}

        <div className="border-rock-secondary-100 -mx-6 mt-8 flex items-center justify-between border-t px-6 pt-4">
          <div className="flex gap-2">
            <Button variant="primary">Edit</Button>
            <Button variant="link">Cancel</Button>
          </div>
          <div className="text-rock-secondary-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18,8h-1V6c0-2.76-2.24-5-5-5S7,3.24,7,6v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M12,17c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,17,12,17z M15.1,8H8.9V6c0-1.71,1.39-3.1,3.1-3.1s3.1,1.39,3.1,3.1V8z" />
            </svg>
          </div>
        </div>
      </PanelContainer>
    </Panel>
  )
}
