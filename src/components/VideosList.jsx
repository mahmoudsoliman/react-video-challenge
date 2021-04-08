import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function VideosList({videos}) {
  const darkTheme = useSelector(state => state.theme.darkTheme)
  return (
    <div className="bg-transparent side-list">
      <ul className="list-group bg-transparent">
        {
          videos.map(video => (
            <li className="list-group-item bg-transparent" key={video.id}>
              <Link to={`/${video.id}`}>
                <div className="row bg-transparent side-list-item">
                  <div className="col-3  side-list-image">
                    <img alt="..." src={video.thumbnail}/>
                  </div>
                  <div className={`col side-list-label text-truncate ${darkTheme? 'dark-theme' : 'light-theme'}`}>
                    {video.title}
                  </div>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

