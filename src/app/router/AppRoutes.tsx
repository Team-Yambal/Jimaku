import * as React from 'react'
// import { useNavigate } from 'react-router-dom'
import { BaseLayout } from '../../common/baselayout/BaseLayout'

import { CounterContainer } from '../../features/counter/CounterContainer'
import NewsContainer from '../../features/news/NewsContainer'
import WeatherContainer from '../../features/weather/WeatherContainer'

import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  // eslint-disable-next-line prefer-const
  // let navigate = useNavigate()

  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<>Hello World</>} />
        <Route path="/counter" element={<CounterContainer />} />
        <Route path="/news" element={<NewsContainer />} />
        <Route path="/weather" element={<WeatherContainer />} />
      </Routes>
    </BaseLayout>
  )
}
