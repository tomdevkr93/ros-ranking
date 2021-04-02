import styled from '@emotion/styled'

function FriendlyMatch() {
  return (
    <FriendlyMatchContainer>
      <Match>
        <h2>아이템 전 갤러리</h2>
        <ul>
          <MatchWrapper>
            <img src="/friendly_match_test.jpeg" alt="테스트 이미지" />
            <MatchDetail>
              <Date>2021.4.2 (금) PM 2:00</Date>
              <ul>
                <Team>
                  <span>로즈 샤론</span>
                  <span>Apink</span>
                </Team>
                <Score>
                  <span>3</span>
                  <span>2</span>
                </Score>
                <Result>
                  <span className="win">승</span>
                  <span>패</span>
                </Result>
              </ul>
            </MatchDetail>
          </MatchWrapper>
        </ul>
      </Match>
      <Match>
        <h2>스피드 전 갤러리</h2>
        <ul>
          <MatchWrapper>
            <img src="/friendly_match_test.jpeg" alt="테스트 이미지" />
            <MatchDetail>
              <Date>2021.4.2 (금) PM 2:00</Date>
              <ul>
                <Team>
                  <span>로즈 샤론</span>
                  <span>Apink</span>
                </Team>
                <Score>
                  <span>3</span>
                  <span>2</span>
                </Score>
                <Result>
                  <span className="win">승</span>
                  <span>패</span>
                </Result>
              </ul>
            </MatchDetail>
          </MatchWrapper>
        </ul>
      </Match>
    </FriendlyMatchContainer>
  )
}

export default FriendlyMatch

const FriendlyMatchContainer = styled.section`
  width: 100%;
`

const Match = styled.div`
  margin-top: 30px;

  h2 {
    margin: 20px 0;
    text-align: center;
    font-size: 20px;
  }

  & > ul {
    width: 100%;
  }
`

const MatchWrapper = styled.li`
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }
`

const MatchDetail = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;

  ul {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;

    li {
      width: 100%;

      span {
        display: inline-block;
        width: 25%;
      }

      span:last-of-type {
        margin-left: 50px;
      }
    }
  }
`

const Date = styled.p`
  position: absolute;
  left: 50%;
  top: 15px;
  transform: translateX(-50%);
  font-size: 13px;
  font-weight: lighter;
`

const Team = styled.li`
  font-size: 20px;
  font-weight: lighter;
`

const Score = styled.li`
  font-size: 18px;
  font-weight: lighter;
  margin: 3px 0 15px;
`

const Result = styled.li`
  font-size: 30px;
  font-weight: bold;

  span {
    color: #1e8df9;
  }

  span.win {
    color: #f93345;
  }
`

