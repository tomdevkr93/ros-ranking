import styled from '@emotion/styled'
import React, { memo } from 'react'
import { getCompetitionTitle, getTrophyImage, Trophy } from '../../interfaces'

interface Props {
  trophys: Trophy[]
}

function Trophys({ trophys }: Props) {
  return (
    <TrophysContainer>
      <h2>트로피 목록</h2>
      <FloorContainer>
        <Floor>
          {trophys.map(
            (trophy, index) =>
              index <= 2 && (
                <span key={`${trophy.title}-${trophy.season}`}>
                  <TrophyDescription>
                    {getCompetitionTitle(trophy.title)} (시즌 {trophy.season})
                  </TrophyDescription>
                  <TrophyImage src={getTrophyImage(trophy.title)} />
                </span>
              )
          )}
        </Floor>
        <Floor>
          {trophys.map(
            (trophy, index) =>
              index >= 3 &&
              index <= 5 && (
                <span key={`${trophy.title}-${trophy.season}`}>
                  <TrophyDescription>
                    {getCompetitionTitle(trophy.title)} (시즌 {trophy.season})
                  </TrophyDescription>
                  <TrophyImage src={getTrophyImage(trophy.title)} />
                </span>
              )
          )}
        </Floor>
        <Floor>
          {trophys.map(
            (trophy, index) =>
              index >= 6 &&
              index <= 8 && (
                <span key={`${trophy.title}-${trophy.season}`}>
                  <TrophyDescription>
                    {getCompetitionTitle(trophy.title)} (시즌 {trophy.season})
                  </TrophyDescription>
                  <TrophyImage src={getTrophyImage(trophy.title)} />
                </span>
              )
          )}
        </Floor>
      </FloorContainer>
    </TrophysContainer>
  )
}

export default memo(Trophys)

const TrophysContainer = styled.ul`
  width: 95%;
  margin: 40px auto 0;

  h2 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`

const FloorContainer = styled.ul`
  margin-top: 25px;
  text-align: center;
`

const Floor = styled.li`
  height: 110px;
  background: url(/shelf.png) no-repeat;
  background-position: center bottom;
  background-size: 100% 110px;
  white-space: pre;

  & > span {
    margin: 0 2%;
    display: inline-block;
  }
`

const TrophyDescription = styled.p`
  position: relative;
  top: -3px;
  font-size: 10px;
  color:  black;
`

const TrophyImage = styled.img`
  display: inline-block;
  width: 58px;
`
