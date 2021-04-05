import { FriendMatch, FriendMatchType } from './../../interfaces/index'

const data: FriendMatch[] = [
  {
    id: 1,
    type: FriendMatchType.SPEED,
    date: '2021.4.4 (일) 19:00',
    score: [7, 0],
    team: ['로즈샤론', '포커스'],
  },
  {
    id: 2,
    type: FriendMatchType.SPEED,
    date: '2021.4.4 (일) 19:40',
    score: [7, 3],
    team: ['로즈샤론', '무자비'],
  },
]

export default data
