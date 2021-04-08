import React from 'react'
import { useSelector } from 'react-redux'

export default function VideoCard({video}) {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  return (
    <div className={`card m-3 ${darkTheme? 'dark-theme' : 'light-theme'}`} key={video.id}>
      <img src={video.thumbnail} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className={`card-title ${darkTheme? 'dark-theme' : 'light-theme'}`}>{video.title}</h5>
        <p className={`card-text ${darkTheme? 'dark-theme' : 'light-theme'}`}>{video.description}</p>
      </div>
    </div>
  )
}
