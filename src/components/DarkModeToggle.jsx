import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { darkThemeTriggered } from '../actions/themeActions'

export default function DarkModeToggle() {
  const dispatch = useDispatch()
  const darkTheme = useSelector(state => state.theme.darkTheme)

  const handleChange = () => {
    if(darkTheme){
      dispatch(darkThemeTriggered(false))
    }
    else{
      dispatch(darkThemeTriggered(true))
    }
  }

  return (
    <div className="custom-control custom-switch">
      <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={handleChange}/>
      <label className="custom-control-label text-white" htmlFor="customSwitch1">Dark Mode</label>
    </div>
  )
}
