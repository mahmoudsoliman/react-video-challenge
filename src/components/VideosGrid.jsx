import React, { Component } from 'react'
import * as videoService from '../services/videoService'
import VideoCard from './VideoCard'

export default class VideosGrid extends Component {
  state = {
    videos: [],
    query: ''
  }

  async componentDidMount () {
    const videos = await videoService.search(this.state.query)

    this.setState({
      videos
    })
  }

  render() {
    const {
      videos 
    } = this.state

    return (
      <div className="card-group row-cols-5">
        {
          videos.map(video => (<div key={video.id} className="col"><VideoCard video={video}/></div>))
        }    
      </div>
    )
  }
}
