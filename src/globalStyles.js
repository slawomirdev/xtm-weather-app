import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  body{
     background-color: #1b1c29;
  }

 *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Lato', sans-serif;
    padding: 0;
  margin: 0;
  }

`;

export default GlobalStyle;
