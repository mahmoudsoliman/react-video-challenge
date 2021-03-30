import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { searchExecuted, queryChanged } from '../actions/searchActions'

export default function SearchForm() {
  const query = useSelector(state => state.search.query)

  const dispatch = useDispatch()
  let history = useHistory()

  const onQueryChange = (value) => {
    dispatch(queryChanged(value))
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(searchExecuted(e.target.value))
      history.push('/')
    }
  }

  return (
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" value={query} onKeyPress={(e) => onKeyPress(e)} onChange={(e) => onQueryChange(e.target.value)}/>
    </form>
  )
}
