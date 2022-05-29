import styled from "styled-components"

export const FiltersContainer = styled.div`
  transition: all 1s ease-in-out;
  width: 80%;
  height: ${({ Showed }) => (Showed ? "fit-content" : "0px")};
  opacity: ${({ Showed }) => (Showed ? "1" : "0")};
  border: 2px solid black;
  border-radius: 0 0 5px 5px;
  background-color: #222228;
  position: relative;
  margin-left: 10%;
  top: -2px;
  z-index: 100;
  display: ${({ Showed }) => (Showed ? "flex" : "none")};

  @media screen and (max-width: 850px) {
    width: 120%;
  }
`