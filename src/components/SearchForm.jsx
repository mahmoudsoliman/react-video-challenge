import React, { Component } from 'react'

export default class SearchForm extends Component {
  render() {
    return (
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    )
  }
}
