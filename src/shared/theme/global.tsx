import { Component } from 'solid-js';

import { createGlobalStyles } from 'solid-styled-components';

export const GlobalStyles: Component = () => {
  const Styles = createGlobalStyles`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Font Name', serif;
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

    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: 900;
      font-style: normal;
    }
    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: 900;
      font-style: italic;
    }
    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: bold;
      font-style: normal;
    }
    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: bold;
      font-style: italic;
    }
    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: normal;
      font-style: italic;
    }
    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: 300;
      font-style: italic;
    }
    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: 100;
      font-style: normal;
    }
    @font-face {
      font-family: 'Font Name';
      src: url('/path/to/file.ttf');
      font-weight: 100;
      font-style: italic;
    }
  `;

  return <Styles />;
};
