import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer'
import { postReducer } from '../reducers/postReducer'
import { agencyReducer } from '../reducers/agencyReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  posts: postReducer,
  agencies: agencyReducer,
})

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)