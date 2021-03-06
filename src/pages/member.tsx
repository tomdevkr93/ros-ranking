import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import Member from '../components/common/Member'
import { PositionType, MemberInfo } from '../interfaces'
import { memberAtom } from '../recoil/member/atom'

interface Members {
  master: MemberInfo[]
  subMaster: MemberInfo[]
  elite: MemberInfo[]
  member: MemberInfo[]
}

function MemberPage() {
  const allMember = useRecoilValue(memberAtom)
  const [members, setMembers] = useState<Members | null>(null)

  useEffect(() => {
    if (!allMember || allMember.length === 0) {
      return
    }

    const members: Members = {
      master: [],
      subMaster: [],
      elite: [],
      member: [],
    }

    for (const member of allMember) {
      switch (member.position) {
        case PositionType.MASTER:
          members.master.push(member)
          break
        case PositionType.SUBMASTER:
          members.subMaster.push(member)
          break
        case PositionType.ELITE:
          members.elite.push(member)
          break
        case PositionType.MEMBER:
          members.member.push(member)
          break
      }
    }

    setMembers(members)
  }, [allMember])

  return (
    <MemberContainer>
      <MemberList>
        <li>
          <Position>클럽장</Position>
          <Members>
            {members &&
              members.master.map((member) => (
                <li key={member.id}>
                  <Member avatar={member.avatar} name={member.name} />
                </li>
              ))}
          </Members>
        </li>
        <li>
          <Position>부클럽장</Position>
          <Members>
            {members &&
              members.subMaster.map((member) => (
                <li key={member.id}>
                  <Member avatar={member.avatar} name={member.name} />
                </li>
              ))}
          </Members>
        </li>
        <li>
          <Position>운영진</Position>
          <Members>
            {members &&
              members.elite.map((member) => (
                <li key={member.id}>
                  <Member avatar={member.avatar} name={member.name} />
                </li>
              ))}
          </Members>
        </li>
        <li>
          <Position>클럽원</Position>
          <Members>
            {members &&
              members.member.map((member) => (
                <li key={member.id}>
                  <Member avatar={member.avatar} name={member.name} />
                </li>
              ))}
          </Members>
        </li>
      </MemberList>
    </MemberContainer>
  )
}

export default MemberPage

const MemberContainer = styled.section``

const MemberList = styled.ul`
  margin-top: 30px;
  width: 100%;
  text-align: center;

  & > li {
    margin-top: 20px;
  }
`

const Position = styled.h2`
  font-size: 20px;
  font-weight: bold;
`

const Members = styled.ul`
  margin-top: 10px;

  & > li {
    display: inline-block;
    margin: 0 5px;
  }
`
