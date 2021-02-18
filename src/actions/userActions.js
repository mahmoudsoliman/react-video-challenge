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

export const videoAddedToFavorites = (video) => dispatch => {
  console.log('Action')
  console.log({video})
  dispatch({
    type: actionTypes.VIDEO_ADDED_TO_FAVORITES,
    payload: {
      video
    }
  })
}

export const videoRemovedFromFavorites = (video) => dispatch => {
  console.log('Remoooovee')
  dispatch({
    type: actionTypes.VIDEO_REMOVED_FROM_FAVORITES,
    payload: {
      video
    }
  })
}