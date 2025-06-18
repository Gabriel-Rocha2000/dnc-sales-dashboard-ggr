import React from 'react'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { lightTheme } from './styles/theme'
import { GlobalStyle } from './styles/globalStyle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
