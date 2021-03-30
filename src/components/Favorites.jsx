import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

export default function Favorites() {
  const currentUser = useSelector(state => state.user.currentUser)
  const videos = useSelector(state => state.user.favorites)
  const darkTheme = useSelector(state => state.theme.darkTheme)
  return (
    currentUser? (
      <div>
        <h1 className={`home-title ${darkTheme? 'dark-theme': 'light-theme'}`}>Favorites</h1>
        <div className="bg-transparent m-3">
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
      </div>
    ) :
    <Redirect to="/"/>
  )
}
