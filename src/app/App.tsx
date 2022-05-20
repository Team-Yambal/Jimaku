import * as React from 'react'
import { AppProvider } from './AppProvider'
import { AppRoutes } from './router/AppRoutes'

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
