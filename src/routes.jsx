import React from 'react'
import {Route, Router, IndexRoute, Link} from 'react-router'
import {Provider} from 'redux'

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
