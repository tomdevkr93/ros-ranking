import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { CompetitionType, PositionType } from '../../interfaces'
import memberWithSelect from '../../recoil/member/withMember'

function getCompetitionTitle(type: CompetitionType) {
  switch (type) {
    case CompetitionType.OFFICIAL_MATCH:
      return '공식 단체전'
    case CompetitionType.PUBLIC:
      return '일반인전'
    case CompetitionType.ELITE:
      return '엘리트전'
    case CompetitionType.MASTER:
      return '마스터전'
    case CompetitionType.ITEM_MATCH:
      return '아이템 왕중왕'
  }
}

function MemberPage() {
  const {
    query: { id },
  } = useRouter()
  const member = useRecoilValue(memberWithSelect(parseInt(id as string)))

  if (member === undefined) {
    return <MemberContainer>Loading..</MemberContainer>
  }

  return (
    <MemberContainer>
      <MemberInfo>
        <InfoLeft>
          <img src={member.avatar} alt="멤버 아바타" />
        </InfoLeft>
        <InfoRight>
          <li>
            <h3>ID:</h3> <span>{member.id}</span>
          </li>
          <li>
            <h3>캐릭터 명:</h3> <span>{member.name}</span>
          </li>
          <li>
            <h3>포지션:</h3> <span>{PositionType[member.position]}</span>
          </li>
        </InfoRight>
      </MemberInfo>
      <MemberTrophys>
        <h2>트로피 목록</h2>
        <FloorContainer>
          <Floor>
            {member.trophys.map(
              (trophy, index) =>
                index <= 2 && (
                  <span key={`${trophy.title}-${trophy.season}`}>
                    <TrophyDescription>
                      {getCompetitionTitle(trophy.title)} (시즌 {trophy.season})
                    </TrophyDescription>
                    <TrophyIcon>{'🏆'}</TrophyIcon>
                  </span>
                )
            )}
          </Floor>
          <Floor>
            {/* {member.trophys.map((trophy) => (
              <span key={`${trophy.title}-${trophy.season}`}>
                <TrophyDescription>
                  {getCompetitionTitle(trophy.title)} (시즌 {trophy.season})
                </TrophyDescription>
                <TrophyIcon>{'🏆'}</TrophyIcon>
              </span>
            ))} */}
          </Floor>
          <Floor>
            {/* {member.trophys.map((trophy) => (
              <span key={`${trophy.title}-${trophy.season}`}>
                <TrophyDescription>
                  {getCompetitionTitle(trophy.title)} (시즌 {trophy.season})
                </TrophyDescription>
                <TrophyIcon>{'🏆'}</TrophyIcon>
              </span>
            ))} */}
          </Floor>
        </FloorContainer>
      </MemberTrophys>
      <MemberRecord>
        <h2>대회 성적</h2>
      </MemberRecord>
    </MemberContainer>
  )
}

export default MemberPage

const MemberContainer = styled.section`
  margin-top: 20px;
  width: 100%;
`
const MemberInfo = styled.div`
  width: 80%;
  margin: 0 auto;
`
const InfoLeft = styled.div`
  display: inline-block;
  width: 30%;
  vertical-align: middle;

  img {
    width: 100%;
    border-radius: 50%;
  }
`
const InfoRight = styled.ul`
  display: inline-block;
  padding-left: 20px;
  width: 70%;
  vertical-align: middle;

  li {
    line-height: 1.3;

    h3 {
      display: inline;
      font-size: 14px;
    }

    span {
      font-size: 14px;
      color: #ee8635;
    }
  }
`
const MemberRecord = styled.ul`
  width: 80%;
  margin: 30px auto 0;

  h2 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`

const MemberTrophys = styled.ul`
  width: 95%;
  margin: 40px auto 0;

  h2 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`

const FloorContainer = styled.ul`
  margin-top: 25px;
  text-align: center;
`

const Floor = styled.li`
  height: 95px;
  background: url(/shelf.png) no-repeat;
  background-position: center bottom;
  background-size: 100% 95px;
  white-space: pre;

  & > span {
    margin: 0 2.5%;
    display: inline-block;
    text-align: center;
  }
`

const TrophyDescription = styled.p`
  font-size: 10px;
`
const TrophyIcon = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: 50px;
`
