import { createGlobalStyle } from 'styled-components/macro';

import InterBoldWoff from './vendor/fonts/inter-bold.woff';
import InterBoldWoff2 from './vendor/fonts/inter-bold.woff2';
import InterRegularWoff from './vendor/fonts/inter-regular.woff';
import InterRegularWoff2 from './vendor/fonts/inter-regular.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: local('Inter'),
    url(${InterRegularWoff}), format('woff'),
    url(${InterRegularWoff2}), format('woff2');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Inter';
    src: local('Inter'),
    url(${InterBoldWoff}), format('woff'),
    url(${InterBoldWoff2}), format('woff2');
    font-style: normal;
    font-weight: 700;
  }
  html {
    box-sizing: border-box;
    background-color: #f3f3f3;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', sans-serif;
    padding: 0;
    margin: 0;
    color: #000000;
  }
  a {
    text-decoration: none;
    color: #7000ff;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default GlobalStyles;
