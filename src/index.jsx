import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

ReactDOM.render(
  <Counter count={0}/>,
  document.getElementById('root')
)
