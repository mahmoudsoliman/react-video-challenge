import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loginModalOpen: false,
  currentUser: null,
  favorites: []
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_MODAL_TRIGGERED:
      return {
        ...state,
        loginModalOpen: action.payload.loginModalOpen
      }
    case actionTypes.USER_LOGGED_IN:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        loginModalOpen: action.payload.loginModalOpen
      }
    case actionTypes.USER_LOGGED_OUT:
      return {
        ...state,
        currentUser: action.payload.currentUser
      }
    case actionTypes.VIDEO_ADDED_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.video]
      }
    case actionTypes.VIDEO_REMOVED_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(video => video.id !== action.payload.video.id)
      }
    default:
      return state
  }
}