import emotionNormalize from 'emotion-normalize';
import { Global, css } from '@emotion/react'
import React from 'react'

export const GlobalStyles = (
  <Global
    styles={css`
      ${emotionNormalize}

      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }
    `}
  />
)
