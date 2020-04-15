import React from 'react'
import ReactDOM from 'react-dom'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${emotionReset}

        body {
          box-sizing: border-box;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
            'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
