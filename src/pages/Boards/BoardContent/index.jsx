import { Box } from '@mui/material'

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: '#1d2125',
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid #31373b',
      }}
    ></Box>
  )
}

export default BoardContent
