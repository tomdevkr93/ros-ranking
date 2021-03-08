import { atom } from 'recoil'
import { MemberInfo } from '../../interfaces'
import DATA from './data'

const memberAtom = atom<MemberInfo[] | null>({
  key: 'memberAtom',
  default: DATA,
})

export default memberAtom
