import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseLayout } from '../../common/baselayout/BaseLayout'

import { CounterContainer } from '../../features/counter/CounterContainer'
import NewsContainer from '../../features/news/NewsContainer'
import WeatherContainer from '../../features/weather/WeatherContainer'

import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import { ListItemButtonWrap } from '../../common/ListItemButtonWrap'
import { Link, Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  // eslint-disable-next-line prefer-const
  let navigate = useNavigate()

  const handlerHomeClick = React.useCallback(() => {
    navigate('/')
  }, [navigate])

  const handlerCounterClick = React.useCallback(() => {
    navigate('/counter')
  }, [navigate])

  const handlerNewsClick = React.useCallback(() => {
    navigate('/news')
  }, [navigate])

  const handlerWeatherClick = React.useCallback(() => {
    navigate('/weather')
  }, [navigate])

  return (
    <BaseLayout
      onBrandClick={handlerHomeClick}
      drawerContents={
        <List component="nav">
          <ListItemButtonWrap text="Dashboard" icon={<DashboardIcon />} />
          <ListItemButtonWrap text="Orders" icon={<ShoppingCartIcon />} />
          <ListItemButtonWrap text="Customers" icon={<PeopleIcon />} />
          <ListItemButtonWrap text="Reports" icon={<BarChartIcon />} />
          <ListItemButtonWrap text="Integrations" icon={<LayersIcon />} />
          <Divider sx={{ my: 1 }} />
          <ListItemButtonWrap
            text="Counter"
            icon={<DashboardIcon />}
            onClick={handlerCounterClick}
          />
          <ListItemButtonWrap
            text="News"
            icon={<DashboardIcon />}
            onClick={handlerNewsClick}
          />
          <ListItemButtonWrap
            text="Weather"
            icon={<DashboardIcon />}
            onClick={handlerWeatherClick}
          />
        </List>
      }
    >
      <Routes>
        <Route path="/" element={<>Hello World</>} />
        <Route path="/counter" element={<CounterContainer />} />
        <Route path="/news" element={<NewsContainer />} />
        <Route path="/weather" element={<WeatherContainer />} />
        <Route
          path="*"
          element={
            <>
              <Link to="/sample">Sample</Link>
              <Link to="/news">News</Link>
              <Link to="/weather">Weather</Link>
            </>
          }
        />
      </Routes>
    </BaseLayout>
  )
}
