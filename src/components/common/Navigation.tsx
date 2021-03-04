import styled from '@emotion/styled'
import React, { memo } from 'react'
import { CompetitionType } from '../../recoil/user/atom'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

function Navigation() {
  const {
    query: { type },
  } = useRouter()
  console.log(type)

  return (
    <NavigationContainer>
      <Form>
        <input type="text" placeholder="닉네임 검색" />
        <Hr />
        <SearchButton src="/search.png" alt="돋보기 버튼" />
      </Form>
      <CompetitionList>
        <Link href={`/competition/OFFICIAL_MATCH`}>
          <li className={type === 'OFFICIAL_MATCH' ? 'active' : ''}>{CompetitionType.OFFICIAL_MATCH}</li>
        </Link>
        <Link href={`/competition/PUBLIC`}>
          <li className={type === 'PUBLIC' ? 'active' : ''}>{CompetitionType.PUBLIC}</li>
        </Link>
        <Link href={`/competition/ELITE`}>
          <li className={type === 'ELITE' ? 'active' : ''}>{CompetitionType.ELITE}</li>
        </Link>
        <Link href={`/competition/MASTER`}>
          <li className={type === 'MASTER' ? 'active' : ''}>{CompetitionType.MASTER}</li>
        </Link>
        <Link href={`/competition/ITEM_MATCH`}>
          <li className={type === 'ITEM_MATCH' ? 'active' : ''}>{CompetitionType.ITEM_MATCH}</li>
        </Link>
      </CompetitionList>
    </NavigationContainer>
  )
}

export default memo(Navigation)

const NavigationContainer = styled.nav`
  position: relative;
  margin: 15px auto;
  width: 93%;
  height: 110px;
`

const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 80%;

  input {
    padding: 0.8em 30px 0.8em 1em;
    width: 100%;
    font-size: 15px;
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
    padding: 4px;
    color: #dddddd;
    cursor: pointer;
    transition: all 0.8s;
    cursor: pointer;
  }

  li.active {
    color: white;
    font-weight: bold;
  }
`
