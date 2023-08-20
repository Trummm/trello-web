import { Box, Divider, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Check } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function Started() {
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
          id='basic-button-started'
          aria-controls={open ? 'basic-menu-started' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ color: '#ccc' }}
        >
          Started
        </Button>
        <Menu
          id='basic-menu-started'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button-started',
          }}
        >
          <MenuItem>
            <ListItemText inset>Single</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>1.15</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>Double</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Check />
            </ListItemIcon>
            Custom: 1.2
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>Add space before paragraph</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Add space after paragraph</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText>Custom spacing...</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </>
  )
}

export default Started
