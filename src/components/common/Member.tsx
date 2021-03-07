import styled from '@emotion/styled'
import Link from 'next/link'
import React, { memo } from 'react'
import { AvatarType } from '../../interfaces'

interface Props {
  id: number
  avatar: AvatarType
  name: string
}

function Member({ id, avatar, name }: Props) {
  return (
    <Link href={`/member/${id}`}>
      <MemberContainer>
        <Avatar src={avatar} />
        <Name>{name}</Name>
      </MemberContainer>
    </Link>
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
