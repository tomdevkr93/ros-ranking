import styled from '@emotion/styled'
import React from 'react'
import Header from '../components/header'
import Navigation from '../components/navigation'
function Home() {
  return (
    <HomeContainer>
      {/* TODO: Header, Navigation 컴포넌트 Layout으로 빼기 */}
      <Header />
      <Navigation />
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  width: 430px;
  margin: 0 auto;
  background-color: #e8e8eb;
`
