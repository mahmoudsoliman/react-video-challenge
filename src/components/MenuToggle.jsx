import React, { Component } from 'react'

export default class MenuToggle extends Component {
  render() {
    return (
      <div>
        <span className="navbar-toggler-icon"></span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    )
  }
}
