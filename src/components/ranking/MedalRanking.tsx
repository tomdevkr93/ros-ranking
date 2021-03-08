import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { Record } from '../../interfaces'
import memberWithSort from '../../recoil/member/withSort'
import Member from '../common/Member'

enum MedalType {
  GOLD = 1,
  SILVER,
  BRONZE,
}

function getMedalType(records: Record[], type: MedalType) {
  const medalRecords = records.filter((record) => record.rank === type)
  return medalRecords.length
}

function MedalRanking() {
  const sortMembers = useRecoilValue(memberWithSort({ key: 'records', orderBy: 'DESC' }))

  return (
    <>
      <Title>메달 순위</Title>
      <MedalRankingContainer>
        {sortMembers.map((member, index) => (
          <li key={member.id}>
            <Ranking>{index + 1}</Ranking>
            <Member member={member} visibleTrophyCount={false} />
            <MedalCount>
              <MedalIcon>{'🥇'}</MedalIcon>
              <Count>{getMedalType(member.records, MedalType.GOLD)}</Count>
              <MedalIcon>{'🥈'}</MedalIcon>
              <Count>{getMedalType(member.records, MedalType.SILVER)}</Count>
              <MedalIcon>{'🥉'}</MedalIcon>
              <Count>{getMedalType(member.records, MedalType.BRONZE)}</Count>
            </MedalCount>
          </li>
        ))}
      </MedalRankingContainer>
    </>
  )
}

export default MedalRanking

const Title = styled.h2`
  width: 90%;
  margin: 20px auto 0;
  font-size: 20px;
`

const MedalRankingContainer = styled.ul`
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
  margin-right: 8%;
  padding-bottom: 2px;
  font-size: 30px;
  color: #48586c;
  border-bottom: 2px solid #c1c5c8;
`

const MedalCount = styled.span`
  position: relative;
  top: -20px;
  display: inline-block;
  margin-left: 10%;
`

const MedalIcon = styled.span`
  font-size: 30px;
  vertical-align: middle;
`

const Count = styled.span`
  display: inline-block;
  margin: 0 10px 0 2px;
  color: #868e94;
  vertical-align: middle;
  font-size: 14px;
`
