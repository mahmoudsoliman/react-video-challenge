import React from 'react'
import _ from 'lodash'
import ReactPlayer from 'react-player/youtube'
import { useDispatch, useSelector } from 'react-redux'
import { videoAddedToFavorites, videoRemovedFromFavorites } from '../actions/userActions'

export default function VideoPlayer({video}) {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  const favorites = useSelector(state => state.user.favorites)
  const currentUser = useSelector(state => state.user.currentUser)

  const dispatch = useDispatch()

  const isFavorite = (video) => {
    const fav = favorites.find(vid => vid.id === video.id)
    const isFav = !_.isNil(fav)
    return isFav
  }

  const handleFavorite = (video) => {
    isFavorite(video)? dispatch(videoRemovedFromFavorites(video)) : dispatch(videoAddedToFavorites(video))
  }

  return (
    <div className="player-wrapper">
      <ReactPlayer className="react-player" url={video.url} width="100%" height="100%"/>
      <h2 className={`my-4 float-left ${darkTheme? 'dark-theme' : 'light-theme'}`}>{video.title}</h2>
      {
        currentUser? (<i 
          className={`fa ${isFavorite(video)? 'fa-star' : 'fa-star-o'} float-right m-3  ${darkTheme? 'dark-theme' : 'light-theme'}`} 
          onClick={() => handleFavorite(video)}
          />) : ""
      }
      <p className={`float-left ${darkTheme? 'dark-theme' : 'light-theme'}`}>{video.description}</p>
    </div>
  )
}
