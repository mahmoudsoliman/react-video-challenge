import React, { Component } from 'react'
import DarkModeToggle from './DarkModeToggle'
import MenuToggle from './MenuToggle'
import SearchForm from './SearchForm'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav container-fluid row">
              <li className="col-1">
                <MenuToggle/>
              </li>
              <li className="col-3">
                <SearchForm/>
              </li>
              <li className="col-5"></li>
              <li className="col">
                <DarkModeToggle/>
              </li>
              <li className="col-1">
                <img src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png" className="rounded" width="50"></img>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
  }
}
