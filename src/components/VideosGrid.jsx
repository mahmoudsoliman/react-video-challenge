import React, { Component } from 'react'
import VideoCard from './VideoCard'
import { connect } from 'react-redux'
import { searchExecuted } from '../actions/searchActions'
import { Link } from 'react-router-dom'

class VideosGrid extends Component {
  componentDidMount() {
    console.log({query: this.props.query})
    this.props.searchExecuted(this.props.query)
  }

  render() {
    const videos = this.props.videos
    console.log({videos})
    return (
      <div className="card-group row-cols-5">
        {
          videos.map(video => (
            <Link key={video.id} to={`/${video.id}`}>
              <div className="col">
                <VideoCard video={video}/>
              </div>
            </Link>
          ))
        }    
      </div>
    )
  }
}

const mapStateToProps = state => ({
  videos: state.search.videos,
  query: state.search.query
})

export default connect(mapStateToProps, {searchExecuted})(VideosGrid)
