import styled from 'styled-components'

export const BackGround = styled.aside`
width: 100%;
height: 100vh;
background-color: #000000ed;
display: flex;
position: fixed;
top: 0;
z-index: 300;
justify-content: center;
transition: all 0.3s ease-in-out;
left: ${({ ShowSingle }) => (ShowSingle ? "0" : "100%")};
`