import React, { Component } from 'react'
import { connect } from 'react-redux'
import { darkThemeTriggered } from '../actions/themeActions'

class DarkModeToggle extends Component {
  handleChange = () => {
    if(this.props.darkTheme){
      this.props.darkThemeTriggered(false)
    }
    else{
      this.props.darkThemeTriggered(true)
    }
  }

  render() {
    return (
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={this.handleChange}/>
        <label className="custom-control-label text-white" htmlFor="customSwitch1">Dark Mode</label>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  darkTheme: state.theme.darkTheme
})

export default connect(mapStateToProps, {darkThemeTriggered})(DarkModeToggle)