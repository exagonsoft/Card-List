import styled from 'styled-components'

export const FiltersButton = styled.div`
  width: 30%;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #222228;
  cursor: pointer;
  margin-left: 5px;
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
  
  padding: 5px;
  z-index: 150;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 2px solid #16d934;
    box-shadow: 2px 2px 2px 2px #000;
   }
`