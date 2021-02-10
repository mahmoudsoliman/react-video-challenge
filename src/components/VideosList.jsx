import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchExecuted } from '../actions/searchActions'

class VideosList extends Component {
  async componentDidMount() {
    if(!this.props.videos.length)
      this.props.searchExecuted(this.props.query)
  }
  render() {
    const videos = this.props.videos
    return (
      <div>
        <ul className="list-group">
          {
            videos.map(video => (
              <li className="list-group-item" key={video.id}>
                <Link to={`/${video.id}`}>
                  <div className="row">
                  <img className=" col-3 float-left" src={video.thumbnail} width="40px" height="50px"/>
                  <label className="col text-truncate">{video.title}</label>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  videos: state.search.videos,
  query: state.search.query
})

export default connect(mapStateToProps, {searchExecuted})(VideosList)
