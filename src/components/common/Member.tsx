import styled from '@emotion/styled'
import React, { memo } from 'react'
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

export default memo(Member)

const MemberContainer = styled.span`
  display: inline-block;
  width: 60px;
  text-align: center;
  cursor: pointer;
`

const Avatar = styled.img`
  width: 80%;
  border-radius: 50%;
`

const Name = styled.p`
  margin-top: 3px;
  font-size: 10px;
  font-weight: 300;
  color: #ee8635;
`
