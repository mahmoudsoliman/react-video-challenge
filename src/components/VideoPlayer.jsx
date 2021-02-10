import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'

export default class VideoPlayer extends Component {
  render() {
    const video = this.props.video
    return (
      <div className="player-wrapper m-4">
        <ReactPlayer url={video.url} width="100%" />
        <h2 className="my-4 float-left">{video.title}</h2>
        <btn className="btn btn-primary m-3 float-right">Add to favorites</btn>
        <p className="float-left">{video.description}</p>
      </div>
    )
  }
}
