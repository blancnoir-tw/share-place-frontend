import styled, { CreateStyled } from '@emotion/styled'

export const theme = {
  color: {
    white: '#fafafa',
    black: '#333333',
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
    },
    secondary: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    info: {
      light: '#2196f3',
      main: '#64b5f6',
      dark: '#1976d2',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    },
    disabled: {
      background: '#cccccc',
      text: '#999999',
    },
  },
}

export type Theme = typeof theme

export default styled as CreateStyled<Theme>
