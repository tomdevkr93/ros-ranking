import { atom } from 'recoil'

export enum Avatar {
  DAO = '/avatar/DAO.png',
  ETHAN = '/avatar/ETHAN.png',
  BAZZI = '/avatar/BAZZI.png',
  DIZNI = '/avatar/DIZNI.png',
  UNI = '/avatar/UNI.png',
  RODUMANI = '/avatar/RODUMANI.png',
  MARID = '/avatar/MARID.png',
  CHENCHEN = '/avatar/CHENCHEN.png',
}

export enum CompetitionType {
  OFFICIAL_MATCH = '공식 단체전',
  PUBLIC = '일반인',
  ELITE = '엘리트',
  MASTER = '마스터',
  ITEM_MATCH = '아이템 왕중왕',
}

export interface Trophy {
  title: CompetitionType
  season: number
}
export interface UserInfo {
  id: number
  name: string
  avatar: Avatar
  trophys: Trophy[]
}

const userInfoAtom = atom<UserInfo | null>({
  key: 'userInfoAtom',
  default: null,
})

export default userInfoAtom
