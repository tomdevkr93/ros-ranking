import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

function Question() {
  const {
    query: { type },
  } = useRouter()
  return <QuestionContainer>{type} 구현중..</QuestionContainer>
}

export default Question

const QuestionContainer = styled.section``
