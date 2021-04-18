import styled from '@emotion/styled'
import React, { memo, useCallback, useState } from 'react'

interface Props {
  members: string[]
}

function MatchMebers({ members }: Props) {
  const [showMemberList, setShowMemberList] = useState(false)

  const onClickButton = useCallback(() => {
    setShowMemberList(prevState => !prevState)
  }, [])

  return (
    <>
      <Member onClick={onClickButton}>[참가 멤버]</Member>
      {showMemberList && (
        <MemberList>
          {members.map((member) => (
            <li>😎&nbsp;&nbsp;{member}</li>
          ))}
        </MemberList>
      )}
    </>
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
