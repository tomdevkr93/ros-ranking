import styled from '@emotion/styled'
import React, { memo, useCallback, useState } from 'react'
import Link from 'next/link'

enum Menu {
  'MEMBER',
  'COMPETITION',
  'QUESTION',
}

function Navigation() {
  const [showSubMenu, setShowSubMenu] = useState<Menu | null>(null)

  const onClickMenu = useCallback(
    (menu: Menu) => () => {
      setShowSubMenu(menu)
    },
    []
  )

  return (
    <NavigationContainer>
      <Form>
        <input type="text" placeholder="닉네임 검색" />
        <Hr />
        <SearchButton src="/search.png" alt="돋보기 버튼" />
      </Form>
      <CompetitionList>
        <Link href="/member">
          <li>클럽원</li>
        </Link>
        <li
          onClick={onClickMenu(Menu.COMPETITION)}
          aria-hidden="true"
          className={showSubMenu === Menu.COMPETITION ? 'active' : ''}
        >
          <h2>로즈샤론내전</h2>
          <SubMenu showSubMenu={showSubMenu === Menu.COMPETITION}>
            <li>· 공식 단체전</li>
            <li>· 일반인</li>
            <li>· 엘리트</li>
            <li>· 마스터</li>
            <li>· 아이템 왕중왕</li>
          </SubMenu>
        </li>
        <li
          onClick={onClickMenu(Menu.QUESTION)}
          aria-hidden="true"
          className={showSubMenu === Menu.QUESTION ? 'active' : ''}
        >
          <h2>로즈샤론문의</h2>
          <SubMenu showSubMenu={showSubMenu === Menu.QUESTION}>
            <li>· 로즈샤론가입문의</li>
            <li>· 로즈샤론친선경기</li>
            <li>· 로즈샤론비매신고</li>
          </SubMenu>
        </li>
      </CompetitionList>
    </NavigationContainer>
  )
}

export default memo(Navigation)

const NavigationContainer = styled.nav`
  position: relative;
  width: 100%;
  height: 180px;
  background-color: #eeeeee;
`

const Form = styled.form`
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
const CompetitionList = styled.ul`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;

  & > li {
    position: relative;
    display: inline-block;
    margin: 0 5px;
    padding: 0.8em 0;
    width: 95px;
    color: #666666;
    border: 1px solid #000000;
    border-radius: 5px;
    font-size: 12px;
    background-color: #fefefe;
    cursor: pointer;
    transition: all 0.8s;
  }

  & > li.active {
    color: #fefefe;
    background-color: #666666;
  }
`
const SubMenu = styled.ul<{ showSubMenu: boolean }>`
  visibility: ${({ showSubMenu }) => (showSubMenu ? 'visible' : 'hidden')};
  opacity: ${({ showSubMenu }) => (showSubMenu ? 1 : 0)};
  position: absolute;
  left: 0;
  top: 40px;
  padding: 0 15px;
  width: 140px;
  color: #666666;
  text-align: left;
  border: 1px solid #000000;
  background-color: #ffffff;
  transition: all 0.5s;

  & > li {
    margin: 11px 0;
    padding: 4px 2px;
    cursor: pointer;
  }

  & > li:hover {
    color: white;
    background-color: #666666;
  }
`
