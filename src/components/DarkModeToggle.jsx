import React, { Component } from 'react'

export default class DarkModeToggle extends Component {
  render() {
    return (
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
        <label class="custom-control-label" for="customSwitch1">Dark Mode</label>
      </div>
    )
  }
}
