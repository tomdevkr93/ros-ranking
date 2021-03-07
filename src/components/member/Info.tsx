import styled from '@emotion/styled'
import React, { memo } from 'react'
import { getPositionTitle, MemberInfo } from '../../interfaces'

interface Props {
  member: MemberInfo
}

function Info({ member }: Props) {
  const { avatar, id, name, position } = member

  return (
    <InfoContainer>
      <InfoLeft>
        <img src={avatar} alt="멤버 아바타" />
      </InfoLeft>
      <InfoRight>
        <li>
          <h3>ID:</h3> <span>{id}</span>
        </li>
        <li>
          <h3>캐릭터 명:</h3> <span>{name}</span>
        </li>
        <li>
          <h3>포지션:</h3> <span>{getPositionTitle(position)}</span>
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
