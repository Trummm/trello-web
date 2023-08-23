import { Box, Button } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import AddCardIcon from '@mui/icons-material/AddCard'

function BoardContent({ board }) {
  return (
    <Box
      sx={{
        backgroundColor: '#1d2125',
        height: (theme) => theme.trello.boardContentHeight,
        width: '100%',
        display: 'flex',
        borderTop: '1px solid #31373b',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      {board.columns.map((column) => {
        return <ListColumns key={column._id} column={column} />
      })}

      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          backgroundColor: '#579dff',
          height: 'fit-content',
          borderRadius: '6px',
          mx: 2,
          color: '#1f262e',
          pl: 2,
        }}
      >
        <Button sx={{ fontSize: '0.875rem' }} startIcon={<AddCardIcon />}>
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default BoardContent
