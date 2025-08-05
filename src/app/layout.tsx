// src/app/layout.tsx
'use client'

import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme/theme'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/noto-sans-devanagari'
import '@fontsource/roboto'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
