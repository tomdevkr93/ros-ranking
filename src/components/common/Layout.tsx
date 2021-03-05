import styled from '@emotion/styled'
import React, { memo } from 'react'
import { ReactNode } from 'react'
import { hideScrollBar } from '../../utils/GlobalStyles'
import Header from './Header'
import Navigation from './navigation'

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
  margin: 0 auto;
  min-width: 320px;
  max-width: 430px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 20px black;
  overflow-x: hidden;
  overflow-y: scroll;
  ${hideScrollBar}
`
