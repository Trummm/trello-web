import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px',
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#55cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
