import { Box } from '@mui/material'
import Card from './Card/Card'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function ListCards({ cards }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
            5
          )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {cards.map((card) => {
        return <Card key={card._id} card={card} />
      })}
    </Box>
  )
}

export default ListCards
