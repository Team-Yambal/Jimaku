import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { TalkListener } from './provider/talk/TalkListener'
import { store } from './store/store'

type ProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: ProviderProps) {
  return (
    <Provider store={store}>
      <TalkListener>
        <BrowserRouter>{children}</BrowserRouter>
      </TalkListener>
    </Provider>
  )
}
