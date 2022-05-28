import styled from "styled-components"

export const BarContainer = styled.div`
  position: relative;
  width: 60%;
  height: 45px;
  border: solid 2px #58f020;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-left: 20%;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 5px 0 5px 0;

  @media screen and (max-width: 850px) {
    width: 90%;
    margin-left: 5%;
    height: 35px;
}
`