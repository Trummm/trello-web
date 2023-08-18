import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
} from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function Templates() {
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box>
        <Button
          id='basic-button-templates'
          aria-controls={open ? 'basic-menu-templates' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ color: '#2ECC71' }}
        >
          Templates
        </Button>
        <Menu
          id='basic-menu-templates'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button-templates',
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize='small' />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
            <Typography variant='body2' color='text.secondary'>
              ⌘X
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCopy fontSize='small' />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
            <Typography variant='body2' color='text.secondary'>
              ⌘C
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentPaste fontSize='small' />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
            <Typography variant='body2' color='text.secondary'>
              ⌘V
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize='small' />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </>
  )
}

export default Templates
