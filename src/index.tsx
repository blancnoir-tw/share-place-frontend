import 'typeface-noto-sans'
import 'typeface-ubuntu'
import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { theme } from './styled'
import { styles } from './globalStyle'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Global styles={styles} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
