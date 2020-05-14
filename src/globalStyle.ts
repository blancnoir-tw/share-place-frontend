import emotionReset from 'emotion-reset'
import { css } from '@emotion/core'

export const styles = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  body {
    background: #fafafa;
    color: #333;
    font-family: 'Ubuntu', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`
