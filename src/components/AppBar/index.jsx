import { Badge, Box, Button, TextField } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as trelloIcon } from '../../assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Templates from './Menus/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import AccountMenu from './Menus/AccountMenu'

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        backgroundColor: '#1d2125',
        width: '100%',
        display: 'flex',
        height: (theme) => theme.trello.appBarHeight,
        alignItems: 'center',
        color: 'black',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: '#ccc' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={trelloIcon} sx={{ color: '#ccc' }} />
          <Typography
            sx={{ fontSize: '1,2rem', fontWeight: 'bold', color: '#ccc' }}
            variant='span'
          >
            Trello
          </Typography>
        </Box>

        <Workspaces name='WorkSpaces' color='#ccc' />
        <Recent />
        <Started />
        <Templates />
        <Button
          sx={{ backgroundColor: '#579dff', color: '#1f262e' }}
          variant='contained'
        >
          Create
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          sx={{
            '& .MuiFormLabel-root': {
              color: '#ccc',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: '#ccc',
            },
            '& .MuiInputLabel-root': { color: '#ccc' },
            '& .MuiOutlinedInput-root': {
              '& > fieldset': { borderColor: '#ccc' },
            },
            '& input': {
              color: '#ccc',
            },
          }}
          id='outlined-search'
          label='Search...'
          type='search'
          size='small'
        />

        <Tooltip title='Notification'>
          <Badge
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#579dff',
              },
              cursor: 'pointer',
            }}
            color='secondary'
            variant='dot'
          >
            <NotificationsNoneIcon sx={{ color: '#ccc' }} />
          </Badge>
        </Tooltip>
        <HelpOutlineIcon sx={{ color: '#ccc' }} />
        <AccountMenu />
      </Box>
    </Box>
  )
}

export default AppBar
