import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {browserHistory, Router} from 'react-router'

import {configureStore} from './store'
let routes = require('./routes').default

const store = configureStore()

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}

render()

if (module.hot) {
  module.hot.accept('./routes', () => {
    routes = require('./routes').default
    render()
  })
}
