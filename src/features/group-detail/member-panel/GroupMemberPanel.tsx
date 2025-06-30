'use client'

import { useState } from 'react'
import { Panel, PanelHeader, PanelBody } from '@/components/patterns/Panel'
import { IconButton } from '@/components/ui/IconButton'
import { SearchInput } from '@/components/ui/SearchInput'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { Checkbox } from '@/components/ui/Checkbox'
import {
  RockGrid,
  RockGridHeader,
  RockGridBody,
  RockGridRow,
  RockGridCell,
} from '@/components/patterns/RockGrid'

// Mock data for demonstration
interface GroupMember {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  joinDate: string
  avatar?: string
  [key: string]: unknown
}

const mockMembers: GroupMember[] = [
  {
    id: '1',
    name: 'Ted Decker',
    email: 'ted.decker@email.com',
    role: 'Leader',
    status: 'active',
    joinDate: '2023-01-14',
    avatar: '/decker_ted.jpg',
  },
  {
    id: '2',
    name: 'Jack Harper',
    email: 'jack.harper@email.com',
    role: 'Member',
    status: 'active',
    joinDate: '2023-03-21',
  },
  {
    id: '3',
    name: 'Will Jones',
    email: 'will.jones@email.com',
    role: 'Member',
    status: 'active',
    joinDate: '2024-01-09',
  },
  {
    id: '4',
    name: 'Alisha Marble',
    email: 'alisha.marble@email.com',
    role: 'Member',
    status: 'active',
    joinDate: '2022-11-07',
  },
  {
    id: '5',
    name: 'Jenny Michaels',
    email: 'jenny.michaels@email.com',
    role: 'Member',
    status: 'active',
    joinDate: '2023-05-15',
  },
  {
    id: '6',
    name: 'Becky Peterson',
    email: 'becky.peterson@email.com',
    role: 'Member',
    status: 'active',
    joinDate: '2023-08-22',
  },
]

export function GroupMemberPanel() {
  const [showSearch, setShowSearch] = useState(false)
  const [members] = useState<GroupMember[]>(mockMembers)
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedMembers(members.map(m => m.id))
    } else {
      setSelectedMembers([])
    }
  }

  const handleSelectMember = (memberId: string, checked: boolean) => {
    if (checked) {
      setSelectedMembers([...selectedMembers, memberId])
    } else {
      setSelectedMembers(selectedMembers.filter(id => id !== memberId))
    }
  }

  const renderMemberCell = (member: GroupMember) => (
    <Avatar
      src={member.avatar}
      alt={`${member.name}'s avatar`}
      name={member.name}
      className="h-8 w-8"
      variant="table"
    />
  )

  const renderStatusBadge = () => (
    <Badge variant="default" className="bg-green-100 text-green-700">
      Active
    </Badge>
  )

  const headerActions = showSearch ? (
    <div className="flex items-center gap-2">
      <span className="bg-rock-background-secondary text-strong flex h-[26px] w-[81px] items-center justify-center rounded-[3px] px-2 py-1 text-xs font-semibold tracking-tight whitespace-nowrap">
        100 Records
      </span>
      <IconButton icon="filter-list" />
      <IconButton icon="search" onClick={toggleSearch} />
      <SearchInput autoFocus placeholder="Search members..." />
      <IconButton icon="plus-square" />
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <span className="bg-rock-background-secondary text-strong flex h-[26px] w-[81px] items-center justify-center rounded-[3px] px-2 py-1 text-xs font-semibold tracking-tight whitespace-nowrap">
        100 Records
      </span>
      <IconButton icon="filter-list" />
      <IconButton icon="search" onClick={toggleSearch} />
      <IconButton icon="plus-square" />
    </div>
  )

  return (
    <Panel>
      <PanelHeader title="Group Members" actions={headerActions} />

      <PanelBody className="p-0">
        <RockGrid className="w-full rounded-none border-0">
          <RockGridHeader>
            <RockGridRow className="bg-rock-background h-[56px]">
              <RockGridCell className="w-12">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedMembers.length === members.length}
                    onChange={handleSelectAll}
                  />
                </div>
              </RockGridCell>
              <RockGridCell className="w-48">
                <div className="flex items-center justify-between">
                  <span className="text-muted text-sm font-semibold">Member</span>
                  <IconButton icon="filter" size="sm" variant="filter" />
                </div>
              </RockGridCell>
              <RockGridCell className="w-24">
                <div className="flex items-center justify-between">
                  <span className="text-muted text-sm font-semibold">Role</span>
                  <IconButton icon="filter" size="sm" variant="filter" />
                </div>
              </RockGridCell>
              <RockGridCell className="w-24">
                <div className="flex items-center justify-between">
                  <span className="text-muted text-sm font-semibold">Status</span>
                  <IconButton icon="filter" size="sm" variant="filter" />
                </div>
              </RockGridCell>
              <RockGridCell className="w-32">
                <div className="flex items-center justify-between">
                  <span className="text-muted text-sm font-semibold">Join Date</span>
                  <IconButton icon="filter" size="sm" variant="filter" />
                </div>
              </RockGridCell>
              <RockGridCell className="w-32">
                <div className="flex items-center gap-2">
                  <span className="text-muted text-sm font-semibold">Actions</span>
                </div>
              </RockGridCell>
            </RockGridRow>
          </RockGridHeader>
          <RockGridBody>
            {members.map((member, index) => (
              <RockGridRow
                key={member.id}
                className={`h-[56px] ${index % 2 === 0 ? 'bg-white' : 'bg-rock-background'}`}
              >
                <RockGridCell>
                  <Checkbox
                    checked={selectedMembers.includes(member.id)}
                    onChange={checked => handleSelectMember(member.id, checked)}
                  />
                </RockGridCell>
                <RockGridCell>{renderMemberCell(member)}</RockGridCell>
                <RockGridCell>
                  <span className="text-muted text-sm">{member.role}</span>
                </RockGridCell>
                <RockGridCell>{renderStatusBadge()}</RockGridCell>
                <RockGridCell>
                  <span className="text-muted text-sm">
                    {new Date(member.joinDate).toLocaleDateString()}
                  </span>
                </RockGridCell>
                <RockGridCell>
                  <div className="flex items-center justify-between gap-2">
                    <IconButton icon="pen" size="sm" />
                    <IconButton icon="lock-alt" size="sm" />
                    <IconButton icon="x-close" size="sm" />
                  </div>
                </RockGridCell>
              </RockGridRow>
            ))}
          </RockGridBody>
        </RockGrid>
      </PanelBody>
    </Panel>
  )
}
