import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import VideosList from './VideosList'
import VideoPlayer from './VideoPlayer'
import * as videoService from '../services/videoService'

export default class VideoDetails extends Component {
  state = {
    video: null,
    relatedVideos: []
  }
  
  async componentDidMount() {
    const videoId = this.props.match.params.id
    const video = await videoService.getVideoById(videoId)
    if(!video) return <Redirect to="/"/>
    const relatedVideos = await videoService.getRelatedVideos(videoId)
    this.setState({
      video,
      relatedVideos
    })
  }

  render() {
    const {
      video,
      relatedVideos
    } = this.state
    return (
      video && relatedVideos?(
      <div className="row m-2">
        <div className="col-8">
          <VideoPlayer video={video} />
        </div>
        <div className="col-4">
          <VideosList videos={relatedVideos}/>
        </div>
      </div>
      ) : ""
    )
  }
}
