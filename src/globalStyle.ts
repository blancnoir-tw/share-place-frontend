import emotionReset from 'emotion-reset'
import { css } from '@emotion/core'

export const styles = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  body {
    color: #333;
    font-family: 'Ubuntu', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .slide-in-left-enter {
    transform: translateX(-100%);
  }

  .slide-in-left-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 200ms;
  }

  .slide-in-left-exit {
    transform: translateX(0%);
    opacity: 1;
  }

  .slide-in-left-exit-active {
    transform: translateX(-100%);
    opacity: 0;
    transition: all 200ms;
  }
`
