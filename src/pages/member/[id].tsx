import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useRecoilValue } from 'recoil'
import memberWithSelect from '../../recoil/member/withMember'
import Info from '../../components/member/Info'
import Trophys from '../../components/member/Trophys'
import Records from '../../components/member/Records'

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
      <Info member={member} />
      <Trophys trophys={member.trophys} />
      <Records records={member.records} />
    </MemberContainer>
  )
}

export default MemberPage

const MemberContainer = styled.section`
  margin-top: 20px;
  width: 100%;
`
