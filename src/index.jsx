import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import reducer from './store'
import Root from './components/Root'

let store = createStore(reducer)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)
