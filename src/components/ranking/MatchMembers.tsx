import styled from '@emotion/styled'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  members: string[]
}

function MatchMebers({ members }: Props) {
  const [showMemberList, setShowMemberList] = useState(false)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showMemberList])

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (showMemberList && !container.current?.contains(target)) {
        setShowMemberList(false)
      }
    },
    [showMemberList]
  )

  const onClickButton = useCallback(() => {
    setShowMemberList((prevState) => !prevState)
  }, [])

  return (
    <div ref={container}>
      <Member onClick={onClickButton}>[참가 멤버]</Member>
      {showMemberList && (
        <MemberList>
          {members.map((member) => (
            <li key={member}>😎&nbsp;&nbsp;{member}</li>
          ))}
        </MemberList>
      )}
    </div>
  )
}

export default memo(MatchMebers)

const Member = styled.button`
  margin-top: 3px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  cursor: pointer;
`

const MemberList = styled.ul`
  position: absolute;
  left: 50%;
  min-width: 90px;
  transform: translate(-50%, 5px);
  box-shadow: 1px 1px 3px black;
  border-radius: 5px;
  background-color: white;
  color: #d35400;
  z-index: 2;

  li {
    margin: 8px 0;
    padding: 0 8px;
    font-size: 12px;
    text-align: left;
  }
`
