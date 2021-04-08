import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { searchExecuted } from '../actions/searchActions'
import { Link } from 'react-router-dom'

export default function VideosGrid() {
  const query = useSelector(state => state.search.query)
  const videos = useSelector(state => state.search.videos)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchExecuted(query))
  }, [query])

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
