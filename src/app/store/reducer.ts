import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from '../../features/counter/counterSlice'
import { daServiceQueries } from './queries/daSetviceQueries'
import { weatherQueries } from './queries/weatherQueries'
import { newsQueries } from './queries/newsQueries'

export const createRootReducer = () => {
  return combineReducers({
    [counterSlice.name]: counterSlice.reducer,
    [daServiceQueries.reducerPath]: daServiceQueries.reducer,
    [weatherQueries.reducerPath]: weatherQueries.reducer,
    [newsQueries.reducerPath]: newsQueries.reducer,
  })
}
