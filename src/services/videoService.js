import axios from 'axios'

export const search = async (query) => {
  const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      type: 'video',
      part: 'snippet',
      maxResults: 10,
      q: query
    }
  })

  return res.data.items.map(item => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }
  })
}

export const getVideoById = async (videoId) => {
  const res = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      part: 'snippet',
      id: videoId
    }
  })

  if(res.data.items.length === 0) return null

  return res.data.items.map(item => {
    return {
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url,
      url: `https://www.youtube.com/watch?v=${item.id}`
    }
  })[0]
}

export const getRelatedVideos = async (videoId) => {
  const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      type: 'video',
      part: 'snippet',
      relatedToVideoId: videoId,
      maxResults: 10
    }
  })

  return res.data.items.map(item => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }
  })
}