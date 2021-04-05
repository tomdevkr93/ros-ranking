import { selectorFamily } from 'recoil'
import friendMatchAtom from './atom'

const withPaging = selectorFamily({
  key: 'withPaging',
  get: (page: number) => ({ get }) => {
    const matchList = get(friendMatchAtom)

    return [...matchList!].reverse().filter((match, index) => {
      if (page * 7 - 7 <= index && index < page * 7) {
        return match
      }
    })
  },
})

export default withPaging
