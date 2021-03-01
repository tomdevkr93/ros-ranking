import React, { memo } from 'react'
import styled from '@emotion/styled'

function Header() {
  return (
    <HeaderContainer>
      <BI>
        <img src="/rosbi.jpg" alt="ros bi" />
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
  height: 70px;
  background-color: #151629;
  box-shadow: 0 5px 10px #151629;
  opacity: 0.9;
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
  right: 40px;
  top: 55%;
  transform: translateY(-50%);

  img {
    width: 30px;
  }
`
