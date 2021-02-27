import styled from '@emotion/styled'
import React from 'react'
function Navigation() {
  return (
    <NavigationContainer>
      <Form>
        <input type="text" placeholder="닉네임 검색" />
        <img src="/search.svg" alt="돋보기 버튼" />
      </Form>
      <CompetitionList>
        <li>공식 단체전</li>
        <li>일반인전</li>
        <li>엘리트전</li>
        <li>마스터전</li>
        <li>아이템 왕중왕전</li>
      </CompetitionList>
    </NavigationContainer>
  )
}

export default Navigation

const NavigationContainer = styled.nav`
  position: relative;
  margin: 15px auto;
  width: 90%;
  height: 110px;
  background-color: #f4f4f4;
  box-shadow: 0 0 3px grey;
`

const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  input {
    padding: 10px 30px 10px 10px;
    border: 1px solid #151629;
    background-color: white;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }

  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
  }
`
const CompetitionList = styled.ul`
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;

  li {
    display: inline-block;
    font-size: 12px;
    margin: 0 3px;
    padding: 3px;
    color: #909090;
    background-color: #f7f7f7;
    cursor: pointer;
  }
`
