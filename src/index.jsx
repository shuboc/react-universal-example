import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import {configureStore} from './store'
import Root from './components/Root'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)
