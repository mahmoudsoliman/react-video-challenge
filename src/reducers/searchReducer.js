import * as actionTypes from '../actions/actionTypes'

const initialState = {
  videos: [],
  query: 'wizeline'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_EXECUTED:
      return {
        ...state,
        query: action.payload.query,
        videos: action.payload.videos
      }
      case actionTypes.QUERY_CHANGED:
        return {
          ...state,
          query: action.payload.query
        }
    default:
      return state
  }
}