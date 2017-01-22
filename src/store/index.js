import {createStore} from 'redux'
import rootReducer from '../reducers'

export const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState)

  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default;

    store.replaceReducer(nextReducer);
  });

  return store
}
