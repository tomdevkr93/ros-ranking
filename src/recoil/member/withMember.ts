import { selectorFamily } from 'recoil'
import memberAtom from './atom'

const memberWithSelect = selectorFamily({
  key: 'memberWithSelect',
  get: (id: number) => ({ get }) => {
    const members = get(memberAtom)
    return members![id - 1]
  },
})

export default memberWithSelect
