import React, { Component } from 'react'

export default class SideBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <h1>Hello world</h1>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
