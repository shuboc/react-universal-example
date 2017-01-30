import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import Counter from './components/Counter'
import About from './components/About'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Counter} />
    <Route path="/about" component={About} />
  </Route>
)

export default routes
