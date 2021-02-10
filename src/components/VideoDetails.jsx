import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchExecuted } from '../actions/searchActions'
import VideosList from './VideosList'
import VideoPlayer from './VideoPlayer'
import * as videoService from '../services/videoService'

class VideoDetails extends Component {
  getCurrentVideo = (videoId) => {
    return this.props.videos.find(video => video.id === videoId)
  }

  render() {
    const videoId = this.props.match.params.id
    const video = this.getCurrentVideo(videoId)
    if(!video) return <Redirect to="/"/>
    return (
      <div className="row">
        <div className="col-8">
          <VideoPlayer video={video} />
        </div>
        <div className="col-4">
          <VideosList videos={this.props.videos}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  videos: state.search.videos,
  query: state.search.query
})

export default connect(mapStateToProps, {searchExecuted})(VideoDetails)