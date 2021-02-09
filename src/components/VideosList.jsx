import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchExecuted } from '../actions/searchActions'

class VideosList extends Component {
  render() {
    const videos = this.props.videos
    return (
      <div className="float-right">
        <ul class="list-group">
          {
            videos.map(video => (
              <li className="list-group-item">
                <Link to={`/${video.id}`}>
                  <img src={video.thumbnail} width="50px" height="50px"/>
                  <label>{video.title}</label>
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
  videos: state.search.videos
})

export default connect(mapStateToProps, {searchExecuted})(VideosList)
