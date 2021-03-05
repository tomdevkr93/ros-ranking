import { atom } from 'recoil'
import { UserInfo } from '../../interfaces'

const userInfoAtom = atom<UserInfo | null>({
  key: 'userInfoAtom',
  default: null,
})

export default userInfoAtom
