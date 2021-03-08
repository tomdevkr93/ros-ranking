import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'

function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/member')
  }, [])

  return <HomeContainer>Loading...</HomeContainer>
}

export default Home

const HomeContainer = styled.div`
  width: 100%;
`
