import React, { Component } from 'react'

export default class VideoCard extends Component {
  render() {
    const {
      video
    } = this.props

    return (
      <div className="card m-3" key={video.id}>
        <img src={video.thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{video.title}</h5>
          <p className="card-text">{video.description}</p>
        </div>
      </div>
    )
  }
}
