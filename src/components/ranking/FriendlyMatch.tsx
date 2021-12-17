import styled from '@emotion/styled'
import { useCallback, useMemo, useState } from 'react'
import { useRecoilValue } from 'recoil'
import friendMatchAtom from '../../recoil/friendly-match/atom'
import withPaging from '../../recoil/friendly-match/withPaging'
import MatchMebers from './MatchMembers'

export const MAX_PAGE_MATCH_ITEM = 7

function FriendlyMatch() {
  const [page, setPage] = useState(1)
  const matches = useRecoilValue(withPaging(page))
  const matchLength = useRecoilValue(friendMatchAtom)?.length

  const getMatchList = useCallback(() => {
    return matches.map((match) => {
      const result = match.score[0] > match.score[1] ? 'win' : 'lose'

      return (
        <li key={match.id} className={result}>
          <Times>{match.id}경기</Times>
          <Left>
            <Type>{match.type}</Type>
            <Date>{match.date}</Date>
          </Left>
          <Center>
            <Team>
              {match.team[0]} VS {match.team[1]}
            </Team>
            {match.members.length > 0 && <MatchMebers members={match.members} />}
          </Center>
          <Result className={result}>{match.score[0] > match.score[1] ? '승리' : '패배'}</Result>
        </li>
      )
    })
  }, [matches])

  const onClickArrow = useCallback(
    (direction: 'LEFT' | 'RIGHT') => () => {
      if (direction === 'LEFT' && page > 1) {
        setPage((prevState) => prevState - 1)
      } else if (direction === 'RIGHT' && page < matchLength! / MAX_PAGE_MATCH_ITEM) {
        setPage((prevState) => prevState + 1)
      }
    },
    [page]
  )

  return (
    <FriendlyMatchContainer>
      <h1>친선 경기 군 기록표 (최신)</h1>
      <img src="/friendly_match.jpeg" alt="friendly match image" />
      {/* <Arrow>
        <img src="/page_arrow.png" alt="prev list" onClick={onClickArrow('LEFT')} />
        <img src="/page_arrow.png" alt="next list" onClick={onClickArrow('RIGHT')} />
      </Arrow>
      <MatchList>{useMemo(() => getMatchList(), [matches])}</MatchList> */}
    </FriendlyMatchContainer>
  )
}

export default FriendlyMatch

const FriendlyMatchContainer = styled.section`
  position: relative;
  width: 100%;

  h1 {
    width: 90%;
    margin: 20px auto 0;
    font-size: 20px;
  }

  img {
    display: block;
    margin: 20px auto 0;
    width: 90%;
    border-radius: 3px;
  }
`

const Arrow = styled.div`
  position: absolute;
  right: 8%;
  top: -5px;

  img {
    width: 25px;
    height: auto;
    cursor: pointer;
    user-select: none;
  }

  /* left, prev */
  img:first-of-type {
    margin-right: 15px;
  }

  /* right, next */
  img:last-of-type {
    transform: rotate(180deg);
  }
`

const MatchList = styled.ul`
  margin: 20px auto 0;
  width: 90%;

  & > li {
    position: relative;
    text-align: center;
    margin-top: 10px;
    border-radius: 5px;
    padding: 20px 5px 15px;
    color: #2d2d2d;
  }

  & > li.win {
    background-color: #a3cfec;
  }

  & > li.lose {
    background-color: #e2b6b3;
  }
`
const Times = styled.p`
  position: absolute;
  left: 8px;
  top: 8px;
  font-size: 10px;
`

const Left = styled.div`
  display: inline-block;
  vertical-align: middle;
`
const Type = styled.span`
  font-size: 14px;
`
const Date = styled.p`
  margin-top: 5px;
  font-size: 11px;
`

const Center = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 45%;
`
const Team = styled.p`
  font-size: 11px;
  font-weight: bold;
`

const Result = styled.span`
  display: inline-block;
  font-size: 20px;
  vertical-align: middle;

  &.win {
    color: #1a78ae;
  }

  &.lose {
    color: #c6443e;
  }
`
