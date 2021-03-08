import styled from '@emotion/styled'
import Link from 'next/link'
import React, { memo } from 'react'
import { MemberInfo } from '../../interfaces'

interface Props {
  member: MemberInfo
  visibleTrophyCount: boolean
}

function Member({ member, visibleTrophyCount = true }: Props) {
  const { id, avatar, name, trophys } = member

  return (
    <Link href={`/member/${id}`}>
      <MemberContainer>
        {visibleTrophyCount && trophys.length > 0 && <TrophysCount>{trophys.length}</TrophysCount>}
        <Avatar src={avatar} />
        <Name>{name}</Name>
      </MemberContainer>
    </Link>
  )
}

export default memo(Member)

const MemberContainer = styled.span`
  position: relative;
  display: inline-block;
  width: 60px;
  text-align: center;
  cursor: pointer;
`

const TrophysCount = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  width: 18px;
  height: 18px;
  font-size: 10px;
  line-height: 1.8;
  color: black;
  background-color: gold;
  border-radius: 50%;
`

const Avatar = styled.img`
  width: 80%;
  border-radius: 50%;
`

const Name = styled.p`
  margin-top: 3px;
  font-size: 10px;
  font-weight: 300;
  color: black;
`
