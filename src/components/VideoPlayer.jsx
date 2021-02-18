import React, { Component } from 'react'
import _ from 'lodash'
import ReactPlayer from 'react-player/youtube'
import { connect } from 'react-redux'
import { videoAddedToFavorites, videoRemovedFromFavorites } from '../actions/userActions'

class VideoPlayer extends Component {

  isFavorite = (video) => {
    const fav = this.props.favorites.find(vid => vid.id === video.id)
    const isFav = !_.isNil(fav)
    return isFav
  } 

  handleFavorite = (video) => {
    this.isFavorite(video)?  this.props.videoRemovedFromFavorites(video) : this.props.videoAddedToFavorites(video)
  }

  render() {
    const video = this.props.video
    return (
      <div className="player-wrapper m-4">
        <ReactPlayer url={video.url} width="100%" />
        <h2 className={`my-4 float-left ${this.props.darkTheme? 'dark-theme' : 'light-theme'}`}>{video.title}</h2>
        {
          this.props.currentUser? (<i 
            className={`fa ${this.isFavorite(video)? 'fa-star' : 'fa-star-o'} float-right m-3  ${this.props.darkTheme? 'dark-theme' : 'light-theme'}`} 
            onClick={() => this.handleFavorite(video)}
            />) : ""
        }
        <p className={`float-left ${this.props.darkTheme? 'dark-theme' : 'light-theme'}`}>{video.description}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  darkTheme: state.theme.darkTheme,
  favorites: state.user.favorites,
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, {videoAddedToFavorites, videoRemovedFromFavorites})(VideoPlayer)