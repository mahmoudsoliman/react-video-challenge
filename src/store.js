import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const initialState = {
  search:{
    videos: [],
    query: 'wizeline'
  }
}
const middlewares = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middlewares))

export default store