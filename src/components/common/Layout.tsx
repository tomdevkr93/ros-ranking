import styled from '@emotion/styled'
import React, { memo } from 'react'
import { ReactNode } from 'react'
import Header from './Header'
import Navigation from './Navigation'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <LayoutContainer>
      <Header />
      <Navigation />
      {children}
    </LayoutContainer>
  )
}

export default memo(Layout)

const LayoutContainer = styled.div`
  min-width: 320px;
  max-width: 430px;
  margin: 0 auto;
  background-color: #eeeeee;
  box-shadow: 0 0 20px black;
`
