import { MOCK_GROUPS, GroupDetail } from './mock'

export function useGroupDetail(groupId: string): GroupDetail {
  return MOCK_GROUPS[groupId] ?? MOCK_GROUPS['worship-team']
}
