import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material'
import { Typography } from '@mui/material'
// import Workspaces from '../../../components/AppBar/Menus/Workspaces'
import PersonIcon from '@mui/icons-material/Person'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

function Card({ card }) {
  const shouldShowCardAction = () => {
    return (
      !!card?.memberIds.length ||
      !!card?.comments.length ||
      !!card?.attachments.length
    )
  }

  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset',
      }}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction() && (
        <CardActions>
          {!!card?.memberIds.length && (
            <Button
              sx={{ cursor: 'pointer' }}
              size='small'
              startIcon={<PersonIcon />}
            >
              {card?.memberIds.length}
            </Button>
          )}

          {!!card?.comments.length && (
            <Button
              sx={{ cursor: 'pointer' }}
              size='small'
              startIcon={<ChatBubbleIcon />}
            >
              {card?.comments.length}
            </Button>
          )}

          {!!card?.attachments.length && (
            <Button
              sx={{ cursor: 'pointer' }}
              size='small'
              startIcon={<RemoveRedEyeIcon />}
            >
              {card?.attachments.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card
