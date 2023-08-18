import { Badge, Box, Button, TextField } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as trelloIcon } from '../../assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Templates from './Menus/Templates'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import avatar from '../../assets/images/trum.png'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import AccountMenu from './Menus/AccountMenu'

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        backgroundColor: '#fff',
        width: '100%',
        display: 'flex',
        height: (theme) => theme.trello.appBarHeight,
        alignItems: 'center',
        color: 'black',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: '#2ECC71' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={trelloIcon} sx={{ color: '#2ECC71' }} />
          <Typography
            sx={{ fontSize: '1,2rem', fontWeight: 'bold', color: '#2ECC71' }}
            variant='span'
          >
            Trello
          </Typography>
        </Box>

        <Workspaces />
        <Recent />
        <Started />
        <Templates />
        <Button sx={{ backgroundColor: '#2ECC71' }} variant='contained'>
          Create
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          sx={{
            '& .MuiFormLabel-root': {
              color: 'black',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'black',
            },
            '& .MuiInputLabel-root': { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& > fieldset': { borderColor: 'black' },
            },
            '& input': {
              color: 'black',
            },
          }}
          id='outlined-search'
          label='Search...'
          type='search'
          size='small'
        />

        <Tooltip title='Notification'>
          <Badge sx={{ cursor: 'pointer' }} color='secondary' variant='dot'>
            <NotificationsIcon />
          </Badge>
        </Tooltip>
        <HelpOutlineIcon />
        <AccountMenu />
      </Box>
    </Box>
  )
}

export default AppBar
