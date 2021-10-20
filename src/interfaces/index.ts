export enum AvatarType {
  DAO = '/avatar/DAO.png',
  ETHAN = '/avatar/ETHAN.png',
  BAZZI = '/avatar/BAZZI.png',
  DIZNI = '/avatar/DIZNI.png',
  UNI = '/avatar/UNI.png',
  RODUMANI = '/avatar/RODUMANI.png',
  MARID = '/avatar/MARID.png',
  CHENCHEN = '/avatar/CHENCHEN.png',
  RABBIT = '/avatar/RABBIT.png',
}

export enum CompetitionType {
  OFFICIAL_MATCH = 1,
  PUBLIC,
  ELITE,
  MASTER,
  ITEM_MATCH,
  NUMBER_ONE,
  NUMBER_TWO,
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

export enum EntitleType {
  OFFICIAL_MATCH = '공식 경기 1대장',
  PUBLIC = '일반인 1대장',
  ELITE = '엘리트 1대장',
  MASTER = '마스터 1대장',
  ITEM_MATCH = '아이템 1대장',
  NUMBER_ONE = '🥇 정예',
  NUMBER_TWO = '🥈 마스터',
}

export enum Graduate {
  PUBLIC = '(구)일반인 졸업자',
  ELITE = '(구)엘리트 졸업자',
  MASTER = '(구)마스터 졸업자',
  CLUB_MASTER = '클럽장 졸업자',
}

export interface MemberInfo {
  id: number
  name: string
  avatar: AvatarType
  entitles: EntitleType[]
  graduates: Graduate[]
  trophys: Trophy[]
  records: Record[]
  position: PositionType
}

export function getCompetitionTitle(type: CompetitionType) {
  switch (type) {
    case CompetitionType.OFFICIAL_MATCH:
      return '공식 단체전'
    case CompetitionType.PUBLIC:
      return '(구) 일반인전'
    case CompetitionType.ELITE:
      return '(구) 엘리트전'
    case CompetitionType.MASTER:
      return '(구) 마스터전'
    case CompetitionType.NUMBER_ONE:
      return '정예'
    case CompetitionType.NUMBER_TWO:
      return '마스터'
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
    case CompetitionType.NUMBER_TWO:
      return '/trophys/elite.png'
    case CompetitionType.MASTER:
    case CompetitionType.NUMBER_ONE:
      return '/trophys/master.png'
    case CompetitionType.ITEM_MATCH:
      return '/trophys/item_match.png'
  }
}

export interface FriendMatch {
  id: number
  type: string
  date: string
  team: ['로즈샤론', string]
  score: [number, number]
  members: string[]
}

export enum FriendMatchType {
  SPEED = '스피드',
  ITEM = '아이템',
}
