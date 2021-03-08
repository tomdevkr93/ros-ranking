import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import React from 'react'
import fontFace from './font-face'

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const hideScrollBar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`

export const GlobalStyles = (
  <Global
    styles={css`
      ${emotionReset}
      ${fontFace}

      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }

      html,
      body,
      #__next {
        width: 100%;
        height: 100%;
      }

      html {
        font-family: 'S-CoreDream', sans-serif;
        font-size: 16px;
        background-color: #2b2b3d;

        /* Prevent font scaling in landscape */
        -webkit-text-size-adjust: none; /*Chrome, Safari, newer versions of Opera*/
        -moz-text-size-adjust: none; /*Firefox*/
        -ms-text-size-adjust: none; /*Ie*/
        -o-text-size-adjust: none; /*old versions of Opera*/
      }

      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    `}
  />
)
