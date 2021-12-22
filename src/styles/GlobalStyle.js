import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

  *{
    font-family: 'Roboto', sans-serif;
    margin:0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;