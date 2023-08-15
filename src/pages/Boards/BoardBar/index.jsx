import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: '#ccc',
        width: '100%',
        display: 'flex',
        height: (theme) => theme.trello.boardBarHeight,
        alignItems: 'center',
        color: 'black',
      }}
    >
      Board Bar
    </Box>
  )
}

export default BoardBar
