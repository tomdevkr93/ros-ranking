import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { withSort } from '../../recoil/member'
import Member from '../common/Member'

function TrophyRanking() {
  const sortMembers = useRecoilValue(withSort({ key: 'trophys', orderBy: 'DESC' }))

  return (
    <>
      <Title>트로피 순위</Title>
      <TrophyRankingContainer>
        {sortMembers.map((member, index) => (
          <li key={member.id}>
            <Ranking className={index + 1 <= 3 ? `ranker-${index + 1}` : ''}>{index + 1}</Ranking>
            <Member member={member} visibleTrophyCount={false} />
            <TrophyCount>
              {'🏆️'}
              <span>{member.trophys.length}</span>
            </TrophyCount>
          </li>
        ))}
      </TrophyRankingContainer>
    </>
  )
}

export default TrophyRanking

const Title = styled.h2`
  width: 90%;
  margin: 20px auto 0;
  font-size: 20px;
`

const TrophyRankingContainer = styled.ul`
  margin: 20px auto 0;
  width: 90%;
  text-align: center;

  li:first-of-type {
    border-top: 1px solid #e9e9e9;
  }

  li {
    padding-top: 10px;
    border-bottom: 1px solid #e9e9e9;
  }
`

const Ranking = styled.span`
  position: relative;
  top: -20px;
  display: inline-block;
  margin-right: 15%;
  padding-bottom: 2px;
  font-size: 30px;
  font-weight: 300;
  color: #c1c5c8;
  border-bottom: 2px solid #c1c5c8;

  &.ranker-1 {
    color: gold;
    font-weight: bold;
    border-color: gold;
  }
  &.ranker-2 {
    color: silver;
    font-weight: bold;
    border-color: silver;
  }
  &.ranker-3 {
    color: #6a3805;
    font-weight: bold;
    border-color: #6a3805;
  }
`

const TrophyCount = styled.span`
  position: relative;
  top: -20px;
  display: inline-block;
  margin-left: 25%;
  font-size: 25px;

  span {
    display: inline-block;
    margin-left: 5px;
    font-size: 16px;
    font-weight: 300;
    color: black;
    vertical-align: middle;
  }
`
