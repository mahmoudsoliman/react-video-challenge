import React, { Component } from 'react'
import { slide as Menu } from "react-burger-menu";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { darkThemeTriggered } from '../actions/themeActions'

class SideBar extends Component {
  render() {
    return (
      <div>
      <Menu className={`bm-menu list-group ${this.props.darkTheme? 'dark-theme': 'light-theme'}`} disableAutoFocus>
        
        <Link className="bm-item list-group-item navbar-brand" to="/">Home</Link>
      
        <Link className="bm-item list-group-item navbar-brand" to="/favorites">Favorites</Link>
      
      </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  darkTheme: state.theme.darkTheme
})

export default connect(mapStateToProps, {darkThemeTriggered})(SideBar)