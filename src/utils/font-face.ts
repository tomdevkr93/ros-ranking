import { css } from '@emotion/react'

const fontFace = css`
  /* Gilroy */
  @font-face {
    font-family: 'S-CoreDream';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/S-CoreDream-3Light.woff2') format('woff2'), url('/fonts/S-CoreDream-3Light.woff') format('woff');
  }
  @font-face {
    font-family: 'S-CoreDream';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/S-CoreDream-4Regular.woff2') format('woff2'),
      url('/fonts/S-CoreDream-4Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'S-CoreDream';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/S-CoreDream-5Medium.woff2') format('woff2'), url('/fonts/S-CoreDream-5Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'S-CoreDream';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/S-CoreDream-6Bold.woff2') format('woff2'), url('/fonts/S-CoreDream-6Bold.woff') format('woff');
  }
`

export default fontFace
