import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
/* body {
  padding: 0;
  margin: 0;
} */
 *, *::after, *::before {
    box-sizing: inherit;
     font-family: 'IBM Plex Mono', monospace;
    padding: 0;
  margin: 0;
  }

`;

export default GlobalStyle;
