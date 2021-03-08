import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { MemberInfo } from '../../interfaces'
import memberAtom from '../../recoil/member/atom'
import Member from '../common/Member'

function compareTrophysCount(x: MemberInfo, y: MemberInfo) {
  return y.trophys.length - x.trophys.length // DESC
}

function TrophyRanking() {
  const members = useRecoilValue(memberAtom)
  const [sortMembers, setSortMembers] = useState<MemberInfo[]>([])

  useEffect(() => {
    if (!members || members.length === 0) {
      return
    }

    let sortMembers = [...members]
    sortMembers.sort(compareTrophysCount)
    sortMembers = sortMembers.filter((member) => member.trophys.length > 0)
    setSortMembers(sortMembers)
  }, [members])

  return (
    <>
      <Title>트로피 순위</Title>
      <TrophyRankingContainer>
        {sortMembers.map((member, index) => (
          <li key={member.id}>
            <Ranking>{index + 1}</Ranking>
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
  font-weight: bold;
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
  margin-right: 20%;
  padding-bottom: 2px;
  font-size: 30px;
  color: #48586c;
  border-bottom: 2px solid #c1c5c8;
`

const TrophyCount = styled.span`
  position: relative;
  top: -20px;
  display: inline-block;
  margin-left: 25%;

  span {
    display: inline-block;
    margin-left: 8px;
    color: #868e94;
  }
`
