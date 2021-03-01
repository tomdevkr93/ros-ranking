import styled from '@emotion/styled'
import React, { memo } from 'react'
function Ranking() {
  return (
    <RankingList>
      <li>
        <Medal>{'🥇'}</Medal>
        <User>
          <img src="/avatar/BAZZI.png" alt="유저 아바타" />
          <Nickname>SASAK</Nickname>
        </User>
      </li>
      <li>
        <Medal>{'🥈'}</Medal>
        <User>
          <img src="/avatar/BAZZI.png" alt="유저 아바타" />
          <Nickname>HONEYMOON</Nickname>
        </User>
      </li>
      <li>
        <Medal>{'🥉'}</Medal>
        <User>
          <img src="/avatar/BAZZI.png" alt="유저 아바타" />
          <Nickname>HONEYMOON</Nickname>
        </User>
      </li>
    </RankingList>
  )
}

export default memo(Ranking)

const RankingList = styled.ul`
  margin-top: 15px;

  li {
    display: inline-block;
    width: 33%;
    text-align: center;
  }
`

const Medal = styled.h3`
  font-size: 40px;
`

const User = styled.div`
  margin-top: 10px;

  img {
    width: 30px;
    border-radius: 50%;
  }
`
const Nickname = styled.p`
  margin-top: 3px;
  display: block;
  color: white;
  font-size: 11px;
  font-weight: bold;
`
