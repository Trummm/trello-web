import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
} from '@mui/material'
import { Typography } from '@mui/material'
// import Workspaces from '../../../components/AppBar/Menus/Workspaces'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonIcon from '@mui/icons-material/Person'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function BoardContent() {
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
          <Card
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
          </Card>

          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
        </Box>

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
      </Box>

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
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' },
          }}
        >
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_49.jpg'
              title='green iguana'
            />
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Zed Design</Typography>
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
          </Card>

          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset',
            }}
          >
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>
        </Box>

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
      </Box>
    </Box>
  )
}

export default BoardContent
