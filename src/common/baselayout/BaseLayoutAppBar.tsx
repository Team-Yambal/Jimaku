import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@mui/material/IconButton'

interface StyledAppBarProps extends MuiAppBarProps {
  drawerWidth?: number
  open?: boolean
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<StyledAppBarProps>(({ theme, open, drawerWidth = 240 }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

type BaseLayoutAppBarProps = StyledAppBarProps & {
  onToggleDrawer?: () => void
}
export const BaseLayoutAppBar = ({
  color = 'default', // "default" | "inherit" | "primary" | "secondary" | "transparent" | undefined
  open,
  variant = 'outlined',
  onToggleDrawer,
  children,
}: BaseLayoutAppBarProps) => {
  return (
    <StyledAppBar open={open} variant={variant} color={color}>
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onToggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
          size="large"
        >
          <MenuIcon />
        </IconButton>
        {children}
      </Toolbar>
    </StyledAppBar>
  )
}
