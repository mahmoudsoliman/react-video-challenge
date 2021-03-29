import React, { Component } from 'react'
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

// export class DarkModeToggle extends Component {
//   handleChange = () => {
//     if(this.props.darkTheme){
//       this.props.darkThemeTriggered(false)
//     }
//     else{
//       this.props.darkThemeTriggered(true)
//     }
//   }

//   render() {
//     return (
//       <div className="custom-control custom-switch">
//         <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={this.handleChange}/>
//         <label className="custom-control-label text-white" htmlFor="customSwitch1">Dark Mode</label>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   darkTheme: state.theme.darkTheme
// })


// export default connect(mapStateToProps, {darkThemeTriggered})(DarkModeToggle)