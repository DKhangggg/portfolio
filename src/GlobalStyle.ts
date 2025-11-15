import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth; /* <-- Dòng này là mấu chốt */
  }
`;

export default GlobalStyle;
