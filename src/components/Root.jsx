import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'

import App from './App'
import Counter from './Counter'
import About from './About'

const Root = ({store, history}) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Counter} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
