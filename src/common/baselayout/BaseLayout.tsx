import * as React from 'react'
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography, { TypographyProps } from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Link from '@mui/material/Link'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { BaseLayoutAppBar } from './BaseLayoutAppBar'
import { BaseLayoutDrawer } from './BaseLayoutDrawer'
import { BaseLayoutMain } from './BaseLayoutMain'

/*
declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
*/

/**
 * Dashboard
 * @see https://github.com/mui/material-ui/blob/v5.5.2/docs/data/material/getting-started/templates/dashboard/Dashboard.tsx
 */

type CopyrightProps = TypographyProps

function Copyright(props: CopyrightProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const mdTheme = createTheme()

type BaseLayoutProps = {
  children: React.ReactNode
  drawerContents: JSX.Element
  onBrandClick?: () => void
}

export const BaseLayout = ({
  children,
  drawerContents,
  onBrandClick = () => undefined,
}: BaseLayoutProps) => {
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <BaseLayoutAppBar open={open} onToggleDrawer={toggleDrawer}>
            <Link
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              onClick={onBrandClick}
              underline="hover"
              style={{ cursor: 'pointer' }}
            >
              Dashboard
            </Link>
            <IconButton color="inherit" size="large">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </BaseLayoutAppBar>
          <BaseLayoutDrawer open={open} onToggleDrawer={toggleDrawer}>
            {drawerContents}
          </BaseLayoutDrawer>
          <BaseLayoutMain>
            {children}
            <Copyright sx={{ pt: 4 }} />
          </BaseLayoutMain>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
