import styled from '@emotion/styled'
import React, { memo } from 'react'
import { Record, getCompetitionTitle, getRankEmoji } from '../../interfaces'

interface Props {
  records: Record[]
}

function Records({ records }: Props) {
  return (
    <RecordContainer>
      <h2>대회 성적</h2>
      <table>
        <thead>
          <tr>
            <td>대회명</td>
            <td>시즌</td>
            <td>순위</td>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={`${record.title}-${record.season}`}>
              <td>{getCompetitionTitle(record.title)}</td>
              <td>{record.season}</td>
              <Rank>{getRankEmoji(record.rank)}</Rank>
            </tr>
          ))}
        </tbody>
      </table>
    </RecordContainer>
  )
}

export default memo(Records)

const RecordContainer = styled.ul`
  width: 80%;
  margin: 40px auto 0;

  h2 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  table {
    margin: 20px auto 0;
    width: 100%;
    text-align: center;

    thead {
      font-weight: bold;
      border-bottom: 1px solid #000000;
    }

    tbody {
      font-size: 14px;

      tr {
        border-bottom: 2px solid white;
      }
    }

    td {
      padding: 8px 0;
      vertical-align: middle;
    }
  }
`

const Rank = styled.td`
  font-size: 25px;
`
