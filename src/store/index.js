import {createStore} from 'redux'
// import rootReducer from './count'
import rootReducer from './rootReducer'

export const configureStore = () => {
  const store = createStore(rootReducer)

  return store
}
