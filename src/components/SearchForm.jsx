import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchExecuted, queryChanged } from '../actions/searchActions'

export class SearchForm extends Component {

  onQueryChange = (value) => {
    this.props.queryChanged(value)
  }

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.searchExecuted(e.target.value)
    }
  }

  render() {
    return (
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" value={this.props.query} onKeyPress={(e) => this.onKeyPress(e)} onChange={(e) => this.onQueryChange(e.target.value)}/>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  query: state.search.query
})

export default connect(mapStateToProps, {searchExecuted, queryChanged})(SearchForm)
