import * as actionTypes from './actionTypes'

export const darkThemeTriggered = (enabled) => dispatch => {
  dispatch({
    type: actionTypes.DARK_THEME_TRIGGERED,
    payload: {
      darkTheme: enabled
    }
  })
}
