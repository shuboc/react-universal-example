import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'

import routes from '../routes'

const Root = ({store, history}) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
