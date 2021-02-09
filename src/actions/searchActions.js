import * as actionTypes from './actionTypes'
import * as videoService from '../services/videoService'

export const searchExecuted = (query) => async dispatch => {
  const videos = await videoService.search(query)
  dispatch({
    type: actionTypes.SEARCH_EXECUTED,
    payload: {
      query,
      videos
    }
  })
}

export const queryChanged = (query) => async dispatch => {
  dispatch({
    type: actionTypes.QUERY_CHANGED,
    payload: {
      query
    }
  })
}