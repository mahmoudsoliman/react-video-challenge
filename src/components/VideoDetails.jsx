import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import VideosList from './VideosList'
import VideoPlayer from './VideoPlayer'
import * as videoService from '../services/videoService'

export default function VideoDetails(props) {
  const [video, setVideo] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])

  useEffect(() => {
    const videoId = props.match.params.id
    const video = await videoService.getVideoById(videoId)
    if(!video) return <Redirect to="/"/>
    const relatedVideos = await videoService.getRelatedVideos(videoId)
    setVideo(video)
    setRelatedVideos(relatedVideos)
  }, [])

  return (
    video && relatedVideos?(
      <div className="row m-2">
        <div className="col-8">
          <VideoPlayer video={video} />
        </div>
        <div className="col-4">
          <VideosList videos={relatedVideos}/>
        </div>
      </div>
      ) : ""
  )
}
