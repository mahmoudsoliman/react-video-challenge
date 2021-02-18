import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import userReducer from './userReducer'
import themeReducer from './themeReducer'



export default combineReducers({
  search: searchReducer,
  user: userReducer,
  theme: themeReducer
})