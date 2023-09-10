import styled from 'styled-components/macro'

export const TimeLineContainer = styled.div`
  display: flex;
  //   flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  color: #171f46;
  text-align: center;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  line-height: 2.7;
  margin: 0px;
  @media screen and(min-width: 768px) {
    font-size: 24px;
  }
`
export const CCBPHeading = styled.span`
  color: #2b237c;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  margin: 0px;
  @media screen and(min-width: 768px) {
    font-size: 30px;
  }
`
