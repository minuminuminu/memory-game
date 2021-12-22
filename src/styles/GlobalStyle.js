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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Rock+3D&display=swap');

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
    animation: ${transitionIn} 0.75s;
    position: relative;
  }
`;

export default GlobalStyle;
