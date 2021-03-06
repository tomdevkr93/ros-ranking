export enum AvatarType {
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

export enum PositionType {
  MASTER,
  SUBMASTER,
  ELITE,
  MEMBER,
}

export interface Trophy {
  title: CompetitionType
  season: number
}
export interface MemberInfo {
  id: number
  name: string
  avatar: AvatarType
  trophys: Trophy[]
  position: PositionType
}
