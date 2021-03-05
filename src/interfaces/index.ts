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
  OFFICIAL_MATCH = 1,
  PUBLIC,
  ELITE,
  MASTER,
  ITEM_MATCH,
}

export enum QuestionType {
  SIGN_UP = 1,
  FRIENDLY_MATCH,
  REPORT,
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
