import React, { memo } from 'react'
import styled from '@emotion/styled'

function Header() {
  return (
    <HeaderContainer>
      <BI>
        <img src="/rosbi.png" alt="ros bi" />
      </BI>
      <OpentalkLink href="https://open.kakao.com/o/sm6giuRc">
        <img src="/kakaotalk.svg" alt="kakaotalk logo" />
      </OpentalkLink>
    </HeaderContainer>
  )
}

export default memo(Header)

const HeaderContainer = styled.nav`
  position: relative;
  width: 100%;
  height: 320px;
  background-color: #fdfdfd;
`
const BI = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`

const OpentalkLink = styled.a`
  position: absolute;
  right: 15px;
  top: 15px;

  img {
    width: 30px;
  }
`
