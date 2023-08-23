import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import AddCardIcon from '@mui/icons-material/AddCard'

function ListColumns({ columns }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '6px',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        color: 'black',
        '&::-webkit-scrollbar-track': { m: 2 },
      }}
    >
      {columns?.map((column) => {
        return <Column key={column._id} column={column} />
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

export default ListColumns
