import styled from '@emotion/styled'
import Link from 'next/link'
import React, { memo } from 'react'
import { MemberInfo } from '../../interfaces'

interface Props {
  member: MemberInfo
  visibleTrophyCount?: boolean
}

function Member({ member, visibleTrophyCount = true }: Props) {
  const { id, avatar, name, trophys, entitles, graduates } = member

  return (
    <Link href={`/member/${id}`}>
      <MemberContainer>
        {entitles.length > 0 && <Crown src="/crown.png" alt="왕관이미지" />}
        {graduates.length > 0 && <Graduate>졸</Graduate>}
        {visibleTrophyCount && trophys.length > 0 && <TrophysCount>{trophys.length}</TrophysCount>}
        <Avatar src={avatar} />
        <Name className={entitles.length > 0 ? 'king' : ''}>{name}</Name>
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

const Crown = styled.img`
  position: absolute;
  width: 35px;
  height: auto;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`

const Graduate = styled.span`
  position: absolute;
  left: 0;
  bottom: 16px;
  padding: 3px;
  font-size: 12px;
  border-radius: 50%;
  background-color: black;
  color: white;
  z-index: 3;
`

const TrophysCount = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 15px;
  width: 18px;
  height: 18px;
  font-size: 10px;
  line-height: 1.8;
  color: black;
  background-color: gold;
  border-radius: 50%;
  z-index: 3;
`

const Avatar = styled.img`
  position: relative;
  width: 80%;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0px 0px 3px #666666;
`

const Name = styled.p`
  margin-top: 3px;
  font-size: 10px;
  color: black;

  &.king {
    color: #d35400;
  }
`
