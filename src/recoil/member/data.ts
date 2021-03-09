import { CompetitionType, MemberInfo } from './../../interfaces/index'
import { AvatarType, PositionType } from '../../interfaces/index'

const data: MemberInfo[] = [
  {
    id: 1,
    name: 'RYANG-A',
    avatar: AvatarType.UNI,
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 2,
      },
    ],
    position: PositionType.MASTER,
  },
  {
    id: 2,
    name: 'HONEYMOON',
    avatar: AvatarType.BAZZI,
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 2,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 1,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 1,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 2,
        rank: 1,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 3,
    name: 'PUPPY',
    avatar: AvatarType.UNI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 4,
    name: 'SASAK',
    avatar: AvatarType.UNI,
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.SUBMASTER,
  },
  {
    id: 5,
    name: 'SIBSUNBI',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 6,
    name: 'BARAM',
    avatar: AvatarType.UNI,
    trophys: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 7,
    name: 'RIGEL',
    avatar: AvatarType.MARID,
    trophys: [],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 8,
    name: 'BAMBOO',
    avatar: AvatarType.DAO,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 9,
    name: 'JIZZANG',
    avatar: AvatarType.CHENCHEN,
    trophys: [
      {
        title: CompetitionType.PUBLIC,
        season: 1,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 2,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 10,
    name: 'RAMYEON',
    avatar: AvatarType.BAZZI,
    trophys: [
      {
        title: CompetitionType.MASTER,
        season: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 3,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 2,
      },
      {
        title: CompetitionType.MASTER,
        season: 1,
        rank: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 3,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 11,
    name: 'MINDDU',
    avatar: AvatarType.UNI,
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 1,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 12,
    name: 'LEMON',
    avatar: AvatarType.ETHAN,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 13,
    name: 'TERA',
    avatar: AvatarType.DIZNI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 14,
    name: 'RUFA',
    avatar: AvatarType.UNI,
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 15,
    name: 'BLACK',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 16,
    name: 'ICEKING',
    avatar: AvatarType.DAO,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 17,
    name: 'JOONAN',
    avatar: AvatarType.MARID,
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 18,
    name: 'MINZHILY',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 19,
    name: 'BORADOLI',
    avatar: AvatarType.BAZZI,
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
      },
      {
        title: CompetitionType.MASTER,
        season: 2,
      },
      {
        title: CompetitionType.MASTER,
        season: 4,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 2,
        rank: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 4,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 20,
    name: 'LEGEND',
    avatar: AvatarType.DAO,
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 2,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 21,
    name: 'DDANDOLI',
    avatar: AvatarType.BAZZI,
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 22,
    name: 'SUNNY',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 23,
    name: 'STYLE',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 24,
    name: 'TT',
    avatar: AvatarType.BAZZI,
    trophys: [
      {
        title: CompetitionType.ELITE,
        season: 1,
      },
    ],
    records: [
      {
        title: CompetitionType.ELITE,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 25,
    name: 'RUMA',
    avatar: AvatarType.DIZNI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 26,
    name: 'JOONGSA',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 27,
    name: 'CURATOR',
    avatar: AvatarType.UNI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 28,
    name: 'BLANK',
    avatar: AvatarType.DAO,
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 2,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 29,
    name: 'ELLIS',
    avatar: AvatarType.DAO,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 30,
    name: 'ZZANGA',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 31,
    name: 'MANGO',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 32,
    name: 'EOLPPAK',
    avatar: AvatarType.UNI,
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 33,
    name: 'JISU',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 34,
    name: 'IPHONE',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 35,
    name: 'BAZZI',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 36,
    name: 'NEOGUL',
    avatar: AvatarType.UNI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 37,
    name: 'DAOBF',
    avatar: AvatarType.DAO,
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 38,
    name: 'BAPE',
    avatar: AvatarType.DAO,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 39,
    name: 'LIOKKU',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 40,
    name: 'ROSE',
    avatar: AvatarType.DAO,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 41,
    name: 'YABURI',
    avatar: AvatarType.DIZNI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 42,
    name: 'LISAKKU',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 43,
    name: 'JIBALY',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 44,
    name: 'MUYAHO',
    avatar: AvatarType.BAZZI,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 45,
    name: 'ZUTOMAYO',
    avatar: AvatarType.ETHAN,
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
]

export default data
