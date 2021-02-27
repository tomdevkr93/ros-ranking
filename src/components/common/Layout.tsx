import React from 'react'
import { ReactNode } from 'react'
import Header from '../header'
import Navigation from '../navigation'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
    </>
  )
}

export default Layout
