import { createGlobalStyle, keyframes } from "styled-components";

const transitionIn = keyframes`
  from {
    opacity:0;
    transform: rotateY(-10deg);
  }

  to{
    opacity:1;
    transform:rotateY(0)
  }
`;

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin:0;
    box-sizing: border-box;
  };

  body{
    width:100vw;
    height:100vh;
    background-image: url("/background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${transitionIn} 1.5s;
    position: relative;
  }
`;

export default GlobalStyle;
