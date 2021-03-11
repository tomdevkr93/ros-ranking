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

export interface Record {
  title: CompetitionType
  season: number
  rank: number
}
export interface MemberInfo {
  id: number
  name: string
  avatar: AvatarType
  trophys: Trophy[]
  records: Record[]
  position: PositionType
}

export function getCompetitionTitle(type: CompetitionType) {
  switch (type) {
    case CompetitionType.OFFICIAL_MATCH:
      return '공식 단체전'
    case CompetitionType.PUBLIC:
      return '일반인전'
    case CompetitionType.ELITE:
      return '엘리트전'
    case CompetitionType.MASTER:
      return '마스터전'
    case CompetitionType.ITEM_MATCH:
      return '아이템 왕중왕'
  }
}

export function getPositionTitle(type: PositionType) {
  switch (type) {
    case PositionType.MASTER:
      return '클럽장'
    case PositionType.SUBMASTER:
      return '부클럽장'
    case PositionType.ELITE:
      return '운영진'
    case PositionType.MEMBER:
      return '클럽원'
  }
}
export function getRankEmoji(rank: number) {
  switch (rank) {
    case 1:
      return '🥇'
    case 2:
      return '🥈'
    case 3:
      return '🥉'
  }
}

export function getTrophyImage(type: CompetitionType) {
  switch (type) {
    case CompetitionType.OFFICIAL_MATCH:
      return '/trophys/official_match.png'
    case CompetitionType.PUBLIC:
      return '/trophys/public.png'
    case CompetitionType.ELITE:
      return '/trophys/elite.png'
    case CompetitionType.MASTER:
      return '/trophys/master.png'
    case CompetitionType.ITEM_MATCH:
      return '/trophys/item_match.png'
  }
}
