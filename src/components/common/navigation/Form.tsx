import styled from '@emotion/styled'
import React, { memo } from 'react'
function Form() {
  return (
    <FormContainer>
      <input type="text" placeholder="닉네임 검색" />
      <Hr />
      <SearchButton src="/search.png" alt="돋보기 버튼" />
    </FormContainer>
  )
}

export default memo(Form)

const FormContainer = styled.form`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 80%;

  input {
    padding: 1em 30px 0.9em 1em;
    width: 100%;
    font-size: 15px;
    font-family: 'S-CoreDream', sans-serif;
    border-radius: 5px;
    border: 1px solid #040404;
    box-shadow: 4px 4px 1px #666666;
    background-color: white;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-weight: 400;
    }
  }
`

const Hr = styled.span`
  position: absolute;
  right: 55px;
  top: 50%;
  transform: translateY(-50%);
  width: 0.5px;
  height: 26px;
  background-color: #000000;
`

const SearchButton = styled.img`
  position: absolute;
  right: 12px;
  top: 53%;
  transform: translateY(-50%);
  width: 30px;
  cursor: pointer;
`
