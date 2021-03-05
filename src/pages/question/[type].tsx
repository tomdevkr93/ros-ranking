import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

function Question() {
  const {
    query: { type },
  } = useRouter()
  return <QuestionContainer>{type}</QuestionContainer>
}

export default Question

const QuestionContainer = styled.section``
