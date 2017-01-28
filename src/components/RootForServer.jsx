import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, RouterContext} from 'react-router'

import routes from '../routes'

const RootForServer = ({store, renderProps}) => (
  <Provider store={store}>
    <RouterContext {...renderProps} />
  </Provider>
)

export default RootForServer
