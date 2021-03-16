import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { Record } from '../../interfaces'
import { withSort } from '../../recoil/member'
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
  const sortMembers = useRecoilValue(withSort({ key: 'records', orderBy: 'DESC' }))

  return (
    <>
      <Title>
        <span>메달 순위</span>
        <p>(메달 개수 순위이며 동점일 경우 클럽 활약도 순으로 배치)</p>
      </Title>
      <MedalRankingContainer>
        {sortMembers.map(
          (member, index) =>
            index < 10 && (
              <li key={member.id}>
                <Ranking className={index + 1 <= 3 ? `ranker-${index + 1}` : ''}>{index + 1}</Ranking>
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
            )
        )}
      </MedalRankingContainer>
    </>
  )
}

export default MedalRanking

const Title = styled.h2`
  width: 90%;
  margin: 20px auto 0;
  font-size: 20px;

  p {
    margin-top: 4px;
    font-size: 11px;
    color: #646976;
  }
`

const MedalRankingContainer = styled.ul`
  margin: 20px auto 0;
  width: 95%;
  text-align: center;

  li {
    padding-top: 15px;
    border-radius: 15px;
  }

  li:nth-of-type(2n - 1) {
    background-color: rgb(244 243 243);
  }
`

const Ranking = styled.span`
  position: relative;
  top: -20px;
  display: inline-block;
  margin-right: 6%;
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

const MedalCount = styled.span`
  position: relative;
  top: -20px;
  display: inline-block;
  margin-left: 9%;
`

const MedalIcon = styled.span`
  font-size: 30px;
  vertical-align: middle;
`

const Count = styled.span`
  display: inline-block;
  margin: 0 10px 0 1px;
  font-size: 14px;
  font-weight: 300;
  color: #646976;
  vertical-align: middle;
`
