import React from 'react'
import styled from '@emotion/styled'
import Season from '../../components/competition/Season'
import { useRouter } from 'next/dist/client/router'
function Competition() {
  const {
    query: { type },
  } = useRouter()

  return (
    <CompetitionContainer>
      {type}
      <Season />
    </CompetitionContainer>
  )
}

export default Competition

const CompetitionContainer = styled.section`
  width: 100%;
`
