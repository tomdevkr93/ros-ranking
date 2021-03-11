import styled from '@emotion/styled'
import React, { memo, useCallback, useRef, useState } from 'react'

function replaceNickname(word: string) {
  switch (word) {
    case 'A':
      return 'ᴀ'
    case 'B':
      return 'ʙ'
    case 'C':
      return 'ᴄ'
    case 'D':
      return 'ᴅ'
    case 'E':
      return 'ᴇ'
    case 'F':
      return 'ғ'
    case 'G':
      return 'ɢ'
    case 'H':
      return 'ʜ'
    case 'I':
      return 'ɪ'
    case 'J':
      return 'ᴊ'
    case 'K':
      return 'ᴋ'
    case 'L':
      return 'ʟ'
    case 'M':
      return 'ᴍ'
    case 'N':
      return 'ɴ'
    case 'O':
      return 'ᴏ'
    case 'P':
      return 'ᴘ'
    case 'Q':
      return 'ǫ'
    case 'R':
      return 'ʀ'
    case 'S':
      return 'ѕ'
    case 'T':
      return 'ᴛ'
    case 'U':
      return 'ᴜ'
    case 'V':
      return 'ᴠ'
    case 'W':
      return 'ᴡ'
    case 'X':
      return 'x'
    case 'Y':
      return 'ʏ'
    case 'Z':
      return 'ᴢ'
    default:
      return ''
  }
}

function Generate() {
  const [inputNickname, setInputNickname] = useState('')
  const [outputNickname, setOutputNickname] = useState('')
  const [copyState, setCopyState] = useState(false)
  const outputRef = useRef<HTMLInputElement>(null)

  const onChangeInputNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const nickname = e.target.value.replace(/[^A-Za-z.]/gi, '') // 영문만 입력
    setInputNickname(nickname)

    setOutput(nickname)
    setCopyState(false)
  }, [])

  const setOutput = useCallback((nickname: string) => {
    const upperCaseNickname = nickname.toUpperCase()
    const resultNickname = upperCaseNickname.replace(
      /(A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)/g,
      replaceNickname
    )
    setOutputNickname(resultNickname)
  }, [])

  const onCopy = useCallback(() => {
    outputRef.current?.select()
    document.execCommand('copy')
    setCopyState(true)

    setTimeout(() => {
      setCopyState(false)
    }, 500)
  }, [copyState])

  return (
    <GenerateContainer>
      <h2>로즈샤론 닉네임 생성</h2>
      <InputNickname
        type="text"
        placeholder="닉네임 입력"
        onChange={onChangeInputNickname}
        value={inputNickname}
        pattern="[A-Za-z]+"
      />
      <GenerateArrow>
        <img src="/generate_arrow.png" alt="화살표" />
      </GenerateArrow>
      <OutputNickname>
        <input
          ref={outputRef}
          type="text"
          readOnly={true}
          placeholder="변환 닉네임"
          value={outputNickname}
          className={copyState ? 'copy' : ''}
        />
        <img src="/copy_icon.png" alt="copy icon" aria-hidden="true" onClick={onCopy} />
      </OutputNickname>
    </GenerateContainer>
  )
}

export default memo(Generate)

const GenerateContainer = styled.section`
  width: 80%;
  margin: 0 auto;

  h2 {
    font-size: 20px;
    margin-top: 30px;
  }

  input {
    padding: 1em 30px 0.9em 1em;
    width: 100%;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #040404;
    box-shadow: 4px 4px 1px #666666;
    background-color: white;
  }
`

const GenerateArrow = styled.div`
  margin: 10px auto;
  width: 60px;
  transform: rotate(10deg);

  img {
    width: 100%;
  }
`
const InputNickname = styled.input`
  margin-top: 30px;
`
const OutputNickname = styled.div`
  position: relative;

  input {
    outline: none;
    transition: all 0.1s;
  }

  input.copy {
    border: 4px solid #0366d6;
  }

  img {
    position: absolute;
    right: 20px;
    top: 50%;
    width: 30px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`
