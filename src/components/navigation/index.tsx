import styled from '@emotion/styled'
import React from 'react'
function Navigation() {
  return (
    <NavigationContainer>
      <Form>
        <input type="text" placeholder="닉네임 검색" />
      </Form>
    </NavigationContainer>
  )
}

export default Navigation

const NavigationContainer = styled.nav`
  margin: 15px auto;
  width: 80%;
  height: 100px;
  background-color: #f4f4f4;
  box-shadow: 0 0 3px grey;
`

const Form = styled.form``
