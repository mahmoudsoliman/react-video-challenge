import * as actionTypes from '../actions/actionTypes'

const initialState = {
  darkTheme: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.DARK_THEME_TRIGGERED:
      return {
        ...state,
        darkTheme: action.payload.darkTheme
      }
    default:
      return state
  }
}