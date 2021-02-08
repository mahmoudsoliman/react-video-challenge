import React, { Component } from 'react'

export default class MenuToggle extends Component {
  render() {
    return (
      <div>
        <span class="navbar-toggler-icon"></span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    )
  }
}
