import {createStore} from 'redux'
import rootReducer from '../reducers'

export const configureStore = () => {
  const store = createStore(rootReducer)

  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default;

    store.replaceReducer(nextReducer);
  });

  return store
}
