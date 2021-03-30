import React from 'react'
import { useSelector } from 'react-redux'
import VideosGrid from './VideosGrid'

export default function Home() {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  return (
    <div>
      <h1 className={`home-title ${darkTheme? 'dark-theme': 'light-theme'}`}>Welcome To The Challenge!</h1>
      <VideosGrid/>
    </div>
  )
}
