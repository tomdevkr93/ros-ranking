import React, { memo } from 'react'
import styled from '@emotion/styled'
import Ranking from './Ranking'
function Season() {
  return (
    <SeasonList>
      <SeasonItem>
        <h1>시즌 1</h1>
        <Ranking />
      </SeasonItem>
      <SeasonItem>
        <h1>시즌 2</h1>
        <Ranking />
      </SeasonItem>
      <SeasonItem>
        <h1>시즌 3</h1>
        <Ranking />
      </SeasonItem>
      <SeasonItem>
        <h1>시즌 4</h1>
        <Ranking />
      </SeasonItem>
    </SeasonList>
  )
}
export default memo(Season)

const SeasonList = styled.ul`
  width: 95%;
  margin: 0 auto;
`

const SeasonItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 15px;
  background-color: #2a1e30;
  box-shadow: 0 0 5px #2a1e30;

  h1 {
    color: white;
    font-size: 20px;
    text-align: center;
  }
`
