import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";

export default class SideBar extends Component {
  render() {
    return (
      <Menu>
        <h1>Home</h1>
        <h1>Favorites</h1>
      </Menu>
    )
  }
}
