import { UserInfo } from './../../interfaces'
import { atom } from 'recoil'

const userInfoAtom = atom<UserInfo | null>({
  key: 'userInfoAtom',
  default: null,
})

export default userInfoAtom
