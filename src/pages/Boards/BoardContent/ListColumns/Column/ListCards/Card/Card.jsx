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

function Card() {
  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset',
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_56.jpg'
        title='green iguana'
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Yasuo Design</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ cursor: 'pointer' }}
          size='small'
          startIcon={<PersonIcon />}
        >
          12
        </Button>
        <Button
          sx={{ cursor: 'pointer' }}
          size='small'
          startIcon={<ChatBubbleIcon />}
        >
          20
        </Button>
        <Button
          sx={{ cursor: 'pointer' }}
          size='small'
          startIcon={<RemoveRedEyeIcon />}
        >
          16
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
