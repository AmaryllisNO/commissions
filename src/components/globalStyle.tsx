import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 /* @font-face {
   font-family: 'Atlas Grotesk';
   src: local('Atlas Grotesk') url(../public/fonts/AtlasGrotesk.otf) format('truetype');
 } */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: 0.2s;
    scroll-behaviour: smooth;
  }
  

  body { 
      background-color: ${({ theme }) => theme.colors.background};
      font-family: ${({ theme }) => theme.fonts.inter};
      margin: 0;
      padding: 0;
      color: white;
      /* min-height: 100vh; */
      min-height: 100vh;
      min-width: 100vw;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      
      /* border: 5px green dotted; */
    }

  h1 {
    /* font-style: italic; */
    margin: 10px 0 10px 0;
  }

  p {
    font-size: 1rem;
    color: #D0D0D0;
    margin: 10px 0 10px 0;
    transition:  width 0.5s;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const GlobalBodyStyle = createGlobalStyle`
body {
  /* Your custom styles for the body tag */
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.inter};
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
