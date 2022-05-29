import styled from 'styled-components'

export const HQCard = styled.img`
  width: 23%;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 2px 2px #000;
   }

   @media screen and (max-width: 850px) {
    width: 43%;
  }
`