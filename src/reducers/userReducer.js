import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loginModalOpen: false,
  currentUser: null
}

export default function (state = initialState, action) {
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
    default:
      return state
  }
}