import { Box } from '@mui/material'
// import ModeSelect from '../../components/ModeSelect'

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        height: (theme) => theme.trello.appBarHeight,
        alignItems: 'center',
        color: 'black',
      }}
    >
      {/* <ModeSelect /> */}
      Header
    </Box>
  )
}

export default AppBar
