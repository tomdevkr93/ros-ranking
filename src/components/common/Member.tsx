import styled from '@emotion/styled'
import React from 'react'
import { AvatarType } from '../../interfaces'

interface Props {
  avatar: AvatarType
  name: string
}

function Member({ avatar, name }: Props) {
  return (
    <MemberContainer>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </MemberContainer>
  )
}

export default Member

const MemberContainer = styled.span`
  display: inline-block;
  width: 55px;
  cursor: pointer;
`

const Avatar = styled.img`
  width: 80%;
  border-radius: 50%;
`

const Name = styled.p`
  margin-top: 3px;
  font-size: 11px;
  font-weight: 300;
  color: #ee8635;
`
