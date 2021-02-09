import React, { Component } from 'react'
import * as videoService from '../services/videoService'
import VideoCard from './VideoCard'
import { connect } from 'react-redux'
import { searchExecuted } from '../actions/searchActions'

class VideosGrid extends Component {
  componentDidMount() {
    this.props.searchExecuted(this.props.query)
  }

  render() {
    const videos = this.props.videos

    return (
      <div className="card-group row-cols-5">
        {
          videos.map(video => (<div key={video.id} className="col"><VideoCard video={video}/></div>))
        }    
      </div>
    )
  }
}

const mapStateToProps = state => ({
  videos: state.search.videos
})

export default connect(mapStateToProps, {searchExecuted})(VideosGrid)
