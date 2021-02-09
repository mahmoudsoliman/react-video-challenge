import axios from 'axios'
import env from "react-dotenv";

export const search = async (query) => {
  console.log(process.env.YOUTUBE_API_KEY)
  const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: env.YOUTUBE_API_KEY,
      type: 'video',
      part: 'snippet',
      maxResults: 10,
      q: query
    }
  })

  return res.data.items.map(item => {
    return {
      id: item.id.vedioId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url,
      url: `https://www.youtube.com/watch?v=${item.id.vedioId}`
    }
  })
}