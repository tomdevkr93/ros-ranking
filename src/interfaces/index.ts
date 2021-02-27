export interface Trophy {
  title: Competition
  season: number
}
export interface UserInfo {
  id: number
  name: string
  avatar: Avatar
  trophys: Trophy[]
}

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

export enum Competition {
  OFFICIAL_MATCH = '공식 단체전',
  PUBLIC = '일반인전',
  ELITE = '엘리트전',
  MASTER = '마스터전',
  ITEM_MATCH = '아이템 왕중왕전',
}
