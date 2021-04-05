import { FriendMatch } from './../../interfaces/index';
import { atom } from 'recoil'
import DATA from './data'

const friendMatchAtom = atom<FriendMatch[] | null>({
  key: 'friendMatchAtom',
  default: DATA,
})

export default friendMatchAtom
