import { Dashboard, Fingerprint } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Button, IconButton } from '@mui/material'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import TrumAvatar from '../../../assets/images/trum.png'
import TrumAvatar2 from '../../../assets/images/1.png'
import TrumAvatar3 from '../../../assets/images/2.jpg'
import TrumAvatar4 from '../../../assets/images/3.jpg'
import TrumAvatar5 from '../../../assets/images/chonky.jpg'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

function BoardBar() {
  const MENUSTYLE = {
    color: '#ccc',
    fontWeight: 'bold',
  }
  return (
    <Box
      sx={{
        backgroundColor: '#1d2125',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
        height: (theme) => theme.trello.boardBarHeight,
        alignItems: 'center',
        color: 'black',
        borderTop: '1px solid #31373b',
        paddingX: 2,
        overflowX: 'auto',
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'black' }}
      >
        <Chip
          sx={MENUSTYLE}
          icon={<Dashboard sx={{ fill: '#ccc' }} />}
          label='Trum Stack Board'
          clickable
        />

        <Chip
          sx={MENUSTYLE}
          icon={<VpnLockIcon sx={{ fill: '#ccc' }} />}
          label='Public/Private WorkSpace'
          clickable
        />

        <Chip
          sx={MENUSTYLE}
          icon={<AddToDriveIcon sx={{ fill: '#ccc' }} />}
          label='Add to google driver'
          clickable
        />

        <Chip
          sx={MENUSTYLE}
          icon={<BoltIcon sx={{ fill: '#ccc' }} />}
          label='Automation'
          clickable
        />

        <Chip
          sx={MENUSTYLE}
          icon={<FilterListIcon sx={{ fill: '#ccc' }} />}
          label='Filter'
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          sx={{ backgroundColor: '#579dff', fontWeight: '500' }}
          variant='outlined'
          startIcon={<PersonAddAltIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={8}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              backgroundColor: '#ccc',
              cursor: 'pointer',
            },
          }}
        >
          <Avatar alt='Remy Sharp' src={TrumAvatar} />
          <Avatar alt='Remy Sharp' src={TrumAvatar2} />
          <Avatar alt='Remy Sharp' src={TrumAvatar3} />
          <Avatar alt='Remy Sharp' src={TrumAvatar4} />
          <Avatar alt='Remy Sharp' src={TrumAvatar5} />
          <Avatar alt='Remy Sharp' src={TrumAvatar2} />
          <Avatar alt='Remy Sharp' src={TrumAvatar3} />
          <Avatar alt='Remy Sharp' src={TrumAvatar4} />
          <Avatar alt='Remy Sharp' src={TrumAvatar5} />
          <Avatar alt='Remy Sharp' src={TrumAvatar3} />
          <Avatar alt='Remy Sharp' src={TrumAvatar5} />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
