import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#138808', // INC Green
    },
    secondary: {
      main: '#FF9933', // Saffron
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#1B1B1B',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Noto Sans Devanagari', sans-serif`,
  },
})

export default theme
