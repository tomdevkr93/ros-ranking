import React from 'react'
import styled from '@emotion/styled'
import Season from '../../components/competition/Season'
function Competition() {
  return (
    <CompetitionContainer>
      <Season />
    </CompetitionContainer>
  )
}

export default Competition

const CompetitionContainer = styled.section`
  width: 100%;
`
