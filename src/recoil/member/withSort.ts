import { MemberInfo } from './../../interfaces/index'
import { selectorFamily, SerializableParam } from 'recoil'
import memberAtom from './atom'

type SortOption = SerializableParam & {
  key: 'trophys' | 'records'
  orderBy: 'DESC' | 'ASC'
}

const compareCount = (key: 'trophys' | 'records', orderBy: 'DESC' | 'ASC') => (x: MemberInfo, y: MemberInfo) => {
  if (orderBy === 'ASC') {
    return x[key].length - y[key].length // ASC
  } else {
    return y[key].length - x[key].length // DESC
  }
}

const memberWithSort = selectorFamily<MemberInfo[], SortOption>({
  key: 'memberWithSort',
  get: ({ key, orderBy }: SortOption) => ({ get }) => {
    let members: MemberInfo[] = [...get(memberAtom)!]
    members.sort(compareCount(key, orderBy))
    members = members.filter((member) => member[key].length > 0)
    return members
  },
})

export default memberWithSort
