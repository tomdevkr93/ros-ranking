import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import FriendlyMatch from '../../components/ranking/FriendlyMatch'
import TrophyRanking from '../../components/ranking/TrophyRanking'
import MedalRanking from '../../components/ranking/MedalRanking'
function Ranking() {
  const {
    query: { type },
  } = useRouter()

  return (
    <RankingContainer>
      {type === 'friendly-match' && <FriendlyMatch />}
      {type === 'trophy' && <TrophyRanking />}
      {type === 'medal' && <MedalRanking />}
    </RankingContainer>
  )
}

export default Ranking

const RankingContainer = styled.section`
  width: 100%;
`
