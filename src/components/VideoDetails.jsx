import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchExecuted } from '../actions/searchActions'
import VideosList from './VideosList'
import VideoPlayer from './VideoPlayer'

class VideoDetails extends Component {

  getCurrentVideo = (videoId) => {
    return this.props.videos.find(video => video.id === videoId)
  }

  render() {
    const videoId = this.props.match.params.id
    const video = this.getCurrentVideo(videoId)
    if(!video) return <Redirect to="/"/>
    return (
      <div>
        <VideosList/>
        <VideoPlayer video={video} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  videos: state.search.videos
})

export default connect(mapStateToProps, {searchExecuted})(VideoDetails)