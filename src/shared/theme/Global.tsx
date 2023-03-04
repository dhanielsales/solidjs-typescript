import { Component } from 'solid-js';

import { createGlobalStyles } from 'solid-styled-components';

export const GlobalStyles: Component = () => {
  const Styles = createGlobalStyles`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Manrope', serif;
    }

    body {
      -webkit-font-smoothing: antialiased !important;
    }

    :root {
      /* > 1200px = 1rem = 20px */
      @media screen and (min-width: 75em) {
        font-size: 125%;
      }

      /* < 900px = 1rem = 16px  */
      @media screen and (max-width: 56.25em) {
        font-size: 100%;
      } 

      /* < 600px = 1rem = 12px  */
      @media screen and (max-width: 37.5em) {
        font-size: 75%;
      }

      /* < 450px = 1rem = 10px  */
      @media screen and (max-width: 28em) {
        font-size: 62.5%;
      }
    }
  `;

  return <Styles />;
};
