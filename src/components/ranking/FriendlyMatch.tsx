import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import friendMatchAtom from '../../recoil/friendly-match/atom'

function FriendlyMatch() {
  const matches = useRecoilValue(friendMatchAtom)

  return (
    <FriendlyMatchContainer>
      <h1>친선 경기 정보</h1>
      <MatchList>
        {[...matches!].reverse().map((match, index) => (
          <li key={match.id} className={match.score[0] > match.score[1] ? 'win' : 'lose'}>
            <Times>{matches!.length - index} 경기</Times>
            <Left>
              <Type>{match.type}</Type>
              <Date>{match.date}</Date>
            </Left>
            <Center>
              <Team>
                {match.team[0]} VS {match.team[1]}
              </Team>
              <Score>
                {match.score[0]}&nbsp;&nbsp;:&nbsp;&nbsp;{match.score[1]}
              </Score>
            </Center>
            <Result className={match.score[0] > match.score[1] ? 'win' : 'lose'}>
              {match.score[0] > match.score[1] ? '승리' : '패배'}
            </Result>
          </li>
        ))}
      </MatchList>
    </FriendlyMatchContainer>
  )
}

export default FriendlyMatch

const FriendlyMatchContainer = styled.section`
  width: 100%;

  h1 {
    width: 90%;
    margin: 20px auto 0;
    font-size: 20px;
  }
`

const MatchList = styled.ul`
  margin: 20px auto 0;
  width: 90%;

  li {
    position: relative;
    text-align: center;
    margin-top: 10px;
    border-radius: 5px;
    padding: 20px 10px 15px;
    color: #2d2d2d;
  }

  li.win {
    background-color: #a3cfec;
  }

  li.lose {
    background-color: #e2b6b3;
  }
`
const Times = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  font-size: 10px;
`

const Left = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 33%;
`
const Type = styled.span`
  font-size: 14px;
`
const Date = styled.p`
  margin-top: 5px;
  font-size: 11px;
`

const Center = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 40%;
`
const Team = styled.span`
  font-size: 12px;
  font-weight: bold;
`
const Score = styled.p`
  margin-top: 8px;
  font-size: 20px;
  font-weight: lighter;
`

const Result = styled.span`
  display: inline-block;
  width: 26%;
  font-size: 20px;

  &.win {
    color: #1a78ae;
  }

  &.lose {
    color: #c6443e;
  }
`
