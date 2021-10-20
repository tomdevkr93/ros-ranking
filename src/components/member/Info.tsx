import styled from '@emotion/styled'
import React, { memo } from 'react'
import { EntitleType, getPositionTitle, MemberInfo } from '../../interfaces'

interface Props {
  member: MemberInfo
}

function Info({ member }: Props) {
  const { avatar, entitles, graduates, name, position } = member

  return (
    <InfoContainer>
      <InfoLeft>
        <img src={avatar} alt="멤버 아바타" />
      </InfoLeft>
      <InfoRight>
        <li>
          <h3>캐릭터 명:</h3>
          <span>
            {entitles.includes(EntitleType.NUMBER_ONE) && "🥇"}
            {entitles.includes(EntitleType.NUMBER_TWO) && "🥈"}
            {name}
          </span>
        </li>
        <li>
          <h3>포지션:</h3> <span>{getPositionTitle(position)}</span>
        </li>
        <li>
          <h3>칭호:</h3>&nbsp;
          {entitles.map((entitle, index) => (
            <Entitle key={entitle}>
              {entitle}
              {entitles.length - 1 !== index && ', '}
            </Entitle>
          ))}
          {graduates.map((graduate, inx) => (
            <Graduate key={graduate}>
              {entitles.length > 0 && inx === 0 && ', '}
              {graduate}
              {graduates.length - 1 !== inx && ', '}
            </Graduate>
          ))}
        </li>
      </InfoRight>
    </InfoContainer>
  )
}

export default memo(Info)

const InfoContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`
const InfoLeft = styled.div`
  display: inline-block;
  width: 30%;
  text-align: right;
  vertical-align: middle;

  img {
    width: 80%;
    border-radius: 50%;
    box-shadow: 0px 0px 5px #666666;
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

const Entitle = styled.span`
  font-size: 12px !important;
  font-weight: bold;
`

const Graduate = styled.span`
  font-size: 12px !important;
  color: #2c3e50 !important;
  font-weight: bold;
  vertical-align: middle;
`
