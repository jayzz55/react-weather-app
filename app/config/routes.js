import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import WeatherForecastContainer from '../containers/WeatherForecastContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:city' component={WeatherForecastContainer} />
      <Route path='forecast/:city/details/:day' component={WeatherForecastContainer} />
    </Route>
  </Router>
)

export default routes
