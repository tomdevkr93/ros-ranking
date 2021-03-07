import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { PositionType } from '../../interfaces'
import memberWithSelect from '../../recoil/member/withMember'

function MemberPage() {
  const {
    query: { id },
  } = useRouter()
  const member = useRecoilValue(memberWithSelect(parseInt(id as string)))

  return (
    <MemberContainer>
      <MemberInfo>
        <InfoLeft>
          <img src={member.avatar} alt="멤버 아바타" />
        </InfoLeft>
        <InfoRight>
          <p>
            <h3>ID:</h3> <span>{member.id}</span>
          </p>
          <p>
            <h3>캐릭터 명:</h3> <span>{member.name}</span>
          </p>
          <p>
            <h3>포지션:</h3> <span>{PositionType[member.position]}</span>
          </p>
        </InfoRight>
      </MemberInfo>
      <MemberRecord>
        <h2>대회 성적</h2>
      </MemberRecord>
      <MemberTrophys>
        <h2>트로피 목록</h2>
      </MemberTrophys>
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
    border-radius: 50%;
  }
`
const InfoRight = styled.div`
  display: inline-block;
  padding-left: 20px;
  width: 70%;
  vertical-align: middle;

  p {
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
  width: 80%;
  margin: 30px auto 0;

  h2 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`
