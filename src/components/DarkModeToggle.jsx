import React, { Component } from 'react'

export default class DarkModeToggle extends Component {
  render() {
    return (
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
        <label className="custom-control-label text-white" for="customSwitch1">Dark Mode</label>
      </div>
    )
  }
}
