import styled from '@emotion/styled'

function MedalRanking() {
  return (
    <MedalRankingContainer>
      <thead>
        <tr>
          <td>순위</td>
          <td>캐릭터명</td>
          <td>트로피 수</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>HONEYMOON</td>
          <td>3개</td>
        </tr>
        <tr>
          <td>2</td>
          <td>SASAK</td>
          <td>1개</td>
        </tr>
        <tr>
          <td>3</td>
          <td>BARAM</td>
          <td>1개</td>
        </tr>
      </tbody>
    </MedalRankingContainer>
  )
}

export default MedalRanking

const MedalRankingContainer = styled.table`
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
`
