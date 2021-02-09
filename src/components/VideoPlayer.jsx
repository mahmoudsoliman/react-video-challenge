import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class VideoPlayer extends Component {
  render() {
    const video = this.props.video
    return (
      <div className="float-left">
        <ReactPlayer url={video.url} />
        <h2>{video.title}</h2>
        <p>{video.description}</p>
      </div>
    )
  }
}
