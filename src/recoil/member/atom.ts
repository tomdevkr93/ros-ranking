import { atom } from 'recoil'
import { MemberInfo } from '../../interfaces'
import DATA from './data'

export const memberAtom = atom<MemberInfo[] | null>({
  key: 'memberAtom',
  default: DATA,
})
