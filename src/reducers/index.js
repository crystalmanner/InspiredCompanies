import { combineReducers } from 'redux'

import textsReducer from './textsReducer'

const rootReducer = combineReducers({
  texts: textsReducer,
})

export default rootReducer
