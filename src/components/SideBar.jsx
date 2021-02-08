import React, { Component } from 'react'

export default class SideBar extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
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
