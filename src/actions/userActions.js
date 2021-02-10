import * as actionTypes from './actionTypes'

export const loginModalTriggered = (isOpen) => dispatch => {
  dispatch({
    type: actionTypes.LOGIN_MODAL_TRIGGERED,
    payload: {
      loginModalOpen: isOpen
    }
  })
}

export const userLoggedIn = (user) => dispatch => {
  dispatch({
    type: actionTypes.USER_LOGGED_IN,
    payload: {
      currentUser: user,
      loginModalOpen: false
    }
  })
}

export const userLoggedOut = () => dispatch => {
  dispatch({
    type: actionTypes.USER_LOGGED_IN,
    payload: {
      currentUser: null
    }
  })
}