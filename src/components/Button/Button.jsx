import { Button as MuiButton } from '@mui/material'

function Button({ text, icon }) {
  return (
    <MuiButton
      startIcon={icon}
      sx={{ backgroundColor: '#579dff', color: '#1f262e' }}
      variant='contained'
    >
      {text}
    </MuiButton>
  )
}

export default Button
