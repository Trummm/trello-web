import { Box, Button, Tooltip } from '@mui/material'
import { Typography } from '@mui/material'
// import Workspaces from '../../../components/AppBar/Menus/Workspaces'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ListCards from './ListCards/ListCards'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
function Column() {
  return (
    <>
      <Box
        sx={{
          height: COLUMN_HEADER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
          Column Title
        </Typography>
        <Box>
          <KeyboardArrowDownIcon />
        </Box>
        {/* <Workspaces color='black' /> */}
      </Box>

      <ListCards />

      <Box
        sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title='Drag to move'>
          <DragHandleIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
      </Box>
    </>
  )
}

export default Column
