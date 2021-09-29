import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router'
import React, { memo, useCallback, useState } from 'react'
import { useRecoilValue } from 'recoil'
import memberAtom from '../../../recoil/member/atom'
function Form() {
  const [nickName, setNickName] = useState('')
  const members = useRecoilValue(memberAtom)
  const router = useRouter()

  const onChangeNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!nickName || !members) {
        return
      }

      const upperCaseNickName = nickName.toUpperCase()

      for (const member of members) {
        if (member.name.indexOf(upperCaseNickName) >= 0) {
          setNickName('')
          router.push(`/member/${member.id}`)
        }
      }
    },
    [nickName, members]
  )

  return (
    <FormContainer onSubmit={onSubmit}>
      <input type="text" placeholder="클럽원 검색" value={nickName} onChange={onChangeNickname} />
      <Hr />
      <SearchButton>
        <img src="/search.png" alt="돋보기 버튼" />
      </SearchButton>
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
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  width: 0.5px;
  height: 26px;
  background-color: #000000;
`

const SearchButton = styled.button`
  position: absolute;
  right: 2%;
  top: 54%;
  transform: translateY(-50%);
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  text-align: center;

  img {
    width: 30px;
    height: auto;
  }
`
