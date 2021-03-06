import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherQueries } from './queries/weatherQueries'
import { newsQueries } from './queries/newsQueries'
import { createRootReducer } from './reducer'
import { daServiceQueries } from './queries/daSetviceQueries'

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = createRootReducer()
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(daServiceQueries.middleware)
      .concat(weatherQueries.middleware)
      .concat(newsQueries.middleware),
})

/**
 * RTK-Query
 * refetchOnMount とrefetchOnReconnect動作に使用されるユーティリティ。
 */
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
