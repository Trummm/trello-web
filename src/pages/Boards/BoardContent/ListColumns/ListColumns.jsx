import { Box } from '@mui/material'
import Column from './Column/Column'

function ListColumns({ column }) {
  return (
    <Box
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        ml: 2,
        borderRadius: '6px',
        backgroundColor: '#ccc',
        color: 'black',
        height: 'fit-content',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
      }}
    >
      <Column column={column} />
    </Box>
  )
}

export default ListColumns
