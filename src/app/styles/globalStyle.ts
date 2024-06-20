import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    line-height: 1.5;
    min-height: 100vh;
  }
  
  img, picture, svg, video, canvas {
    display: block;
    max-width: 100%;
  }

  input, textarea, button, select {
    font: inherit;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  ul, li {
    list-style: none;
  }

  a {
    all: unset;
    cursor: pointer;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export { GlobalStyle };
