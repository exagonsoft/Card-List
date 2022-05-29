import styled from 'styled-components'

export const FiltersButton = styled.div`
  width: 90%;
  height: 100%;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #222228;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 10px;
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: left;
  font-weight: bold;
  padding: 5px;
  z-index: 150;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 850px) {
    border-radius:${({ Showed }) => (Showed ? "5px 5px 0 5px" : "5px 5px 5px 5px")};
  }

  &:hover {
    border: 2px solid #16d934;
    box-shadow: 2px 2px 2px 2px #000;
   }
`