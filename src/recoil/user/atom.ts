import { atom } from 'recoil'

interface UserInfo {
  name: string
  age: number
}

const userInfoAtom = atom<UserInfo | null>({
  key: 'userInfoAtom',
  default: null,
})

export default userInfoAtom
