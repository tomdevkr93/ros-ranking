import styled from '@emotion/styled'
import React, { memo, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { CompetitionType, QuestionType } from '../../../interfaces'
import Form from './Form'
import { useRouter } from 'next/dist/client/router'

enum Menu {
  'MEMBER',
  'COMPETITION',
  'QUESTION',
}

function Navigation() {
  const [showSubMenu, setShowSubMenu] = useState<Menu | null>(null)
  const [activeMenu, setActiveMenu] = useState<Menu | null>(null)
  const { asPath } = useRouter()

  useEffect(() => {
    if (asPath.indexOf('member') >= 0) {
      setActiveMenu(Menu.MEMBER)
    } else if (asPath.indexOf('competition') >= 0) {
      setActiveMenu(Menu.COMPETITION)
    } else if (asPath.indexOf('question') >= 0) {
      setActiveMenu(Menu.QUESTION)
    }
  }, [asPath])

  const onClickMenu = useCallback(
    (menu: Menu) => () => {
      setShowSubMenu((prevState) => (prevState === menu ? null : menu))
    },
    []
  )

  return (
    <NavigationContainer>
      <Form />
      <MenuList>
        <Link href="/member">
          <li
            onClick={onClickMenu(Menu.MEMBER)}
            aria-hidden="true"
            className={activeMenu === Menu.MEMBER ? 'active' : ''}
          >
            클럽원
          </li>
        </Link>
        <li
          onClick={onClickMenu(Menu.COMPETITION)}
          aria-hidden="true"
          className={activeMenu === Menu.COMPETITION ? 'active' : ''}
        >
          <h2>로즈샤론내전</h2>
          <SubMenu showSubMenu={showSubMenu === Menu.COMPETITION}>
            <Link href={`/competition/${CompetitionType.OFFICIAL_MATCH}`}>
              <li>· 공식 단체전</li>
            </Link>
            <Link href={`/competition/${CompetitionType.PUBLIC}`}>
              <li>· 일반인</li>
            </Link>
            <Link href={`/competition/${CompetitionType.ELITE}`}>
              <li>· 엘리트</li>
            </Link>
            <Link href={`/competition/${CompetitionType.MASTER}`}>
              <li>· 마스터</li>
            </Link>
            <Link href={`/competition/${CompetitionType.ITEM_MATCH}`}>
              <li>· 아이템 왕중왕</li>
            </Link>
          </SubMenu>
        </li>
        <li
          onClick={onClickMenu(Menu.QUESTION)}
          aria-hidden="true"
          className={activeMenu === Menu.QUESTION ? 'active' : ''}
        >
          <h2>로즈샤론문의</h2>
          <SubMenu showSubMenu={showSubMenu === Menu.QUESTION}>
            <Link href={`/question/${QuestionType.SIGN_UP}`}>
              <li>· 로즈샤론가입문의</li>
            </Link>
            <Link href={`/question/${QuestionType.FRIENDLY_MATCH}`}>
              <li>· 로즈샤론친선경기</li>
            </Link>
            <Link href={`/question/${QuestionType.REPORT}`}>
              <li>· 로즈샤론비매신고</li>
            </Link>
          </SubMenu>
        </li>
      </MenuList>
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

const MenuList = styled.ul`
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 10;

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
