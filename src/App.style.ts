import styled, { createGlobalStyle } from 'styled-components';

export const Margin = styled.div`
    margin-top: 5rem;
`;

export const GlobalStyle = createGlobalStyle`

:root {
  /* size */
  --footer-height: 10rem;
  --nav-height: 4rem;
  
  /* color */
  --white: #fff;
  --black: #3d3d3d;
  --gray: #f4f4f4;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  max-width: 100%;
}

body {
  position: relative;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Pretendard-Regular';
  /* animation: fadein 2s; */

  @media ( min-width: 768px ) {
  width: 80%;
  }

  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */

  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }
  
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

button, p, span {
  font-family: 'Pretendard-Regular';
}

`;
