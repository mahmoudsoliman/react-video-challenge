import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
  render() {
    return (
      <Menu>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link className="navbar-brand" to="/">Home</Link>
          </li>
          <li className="list-group-item">
            <Link className="navbar-brand" to="/favorites">Favorites</Link>
          </li>
       </ul>
      </Menu>
    )
  }
}
