import React, { memo } from 'react'
import styled from '@emotion/styled'

function Header() {
  return (
    <HeaderContainer>
      <Title>
        <p>카트라이더 러쉬플러스</p>
        <img src="/rosbi.png" alt="ros bi" />
        <span>RYANG-A.ROS</span>
      </Title>
      <OpentalkLink href="https://open.kakao.com/o/gEsPpHpc" target="_blank">
        <img src="/kakaotalk.svg" alt="kakaotalk logo" />
      </OpentalkLink>
      <YoutubeLink href="https://www.youtube.com/channel/UCjFB4zWHgyxcP4FNMlqccCg/featured" target="_blank">
        <img src="/youtube.svg" alt="youtube logo" />
      </YoutubeLink>
      {/* TODO: 유튜브 링크 추가 */}
    </HeaderContainer>
  )
}

export default memo(Header)

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 180px;
`
const Title = styled.h1`
  position: absolute;
  left: 0;
  top: 60%;
  transform: translateY(-50%);
  width: 60.5%;

  p {
    display: inline-block;
    margin-left: 0.8em;
    font-size: 16.5px;
    font-weight: 500;
    font-style: italic;
    color: #646464;
  }

  img {
    margin-top: 8px;
    width: 100%;
    height: auto;
  }

  span {
    float: right;
    margin-top: 0.3em;
    font-size: 11px;
    font-weight: 500;
    color: #646464;
  }

  &:after {
    content: '';
    clear: both;
  }
`

const OpentalkLink = styled.a`
  position: absolute;
  right: 15px;
  top: 15px;

  img {
    width: 35px;
  }
`

const YoutubeLink = styled.a`
  position: absolute;
  right: 15px;
  top: 60px;

  img {
    width: 35px;
  }
`
