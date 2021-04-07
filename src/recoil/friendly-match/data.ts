import { FriendMatch, FriendMatchType } from './../../interfaces/index'

const data: FriendMatch[] = [
  {
    id: 1,
    type: FriendMatchType.SPEED,
    date: '2021.4.1 (목) 23:00',
    score: [0, 1],
    team: ['로즈샤론', '퍼플레인'],
  },
  {
    id: 2,
    type: FriendMatchType.SPEED,
    date: '2021.4.2 (금) 22:00',
    score: [0, 1],
    team: ['로즈샤론', 'Apink'],
  },
  {
    id: 3,
    type: FriendMatchType.ITEM,
    date: '2021.4.3 (일) 19:30',
    score: [0, 1],
    team: ['로즈샤론', 'Lotto'],
  },
  {
    id: 4,
    type: FriendMatchType.SPEED,
    date: '2021.4.4 (일) 19:00',
    score: [7, 0],
    team: ['로즈샤론', '포커스'],
  },
  {
    id: 5,
    type: FriendMatchType.SPEED,
    date: '2021.4.4 (일) 19:40',
    score: [7, 3],
    team: ['로즈샤론', '무자비'],
  },
  {
    id: 6,
    type: FriendMatchType.SPEED,
    date: '2021.4.7 (수) 23:00',
    score: [3, 7],
    team: ['로즈샤론', 'After'],
  },
]

export default data
