import React, { Component } from 'react'
import DarkModeToggle from './DarkModeToggle'
import SearchForm from './SearchForm'
import UserMenu from './UserMenu'
import { darkThemeTriggered } from '../actions/themeActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid navbar-expand-xl">
        <nav className={`navbar ${this.props.darkTheme? 'dark-theme' : 'light-theme'}`}>
          <div className="container-fluid">  
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav container-fluid row">
                <li className="col">
                  <Link to="/">
                    <i className="fa fa-4x fa-home"></i>
                  </Link>
                </li>
                <li className="col-3">
                  <SearchForm/>
                </li>
                <li className="col-5"></li>
                <li className="col">
                  <DarkModeToggle/>
                </li>
                <li className="col-1">
                  <UserMenu/>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  darkTheme: state.theme.darkTheme
})

export default connect(mapStateToProps, {darkThemeTriggered})(NavBar)