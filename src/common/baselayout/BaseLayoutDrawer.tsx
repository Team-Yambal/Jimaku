import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import { DrawerProps } from '@mui/material'
import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

type StyledDrawerProps = DrawerProps & {
  drawerWidth?: number
}

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})<StyledDrawerProps>(({ theme, open, drawerWidth = 240 }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

type BaseLayoutDrawerProps = StyledDrawerProps & {
  onToggleDrawer: () => void
}

export const BaseLayoutDrawer = ({
  open,
  variant = 'permanent',
  onToggleDrawer,
  children,
}: BaseLayoutDrawerProps) => {
  return (
    <StyledDrawer variant={variant} open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={onToggleDrawer} size="large">
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      {children}
    </StyledDrawer>
  )
}
