import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

class Favorites extends Component {
  render() {
    const videos = this.props.favorites
    return (
    this.props.currentUser? (
      <div>
        <h1 className={`home-title ${this.props.darkTheme? 'dark-theme': 'light-theme'}`}>Favorites</h1>
        <div className="bg-transparent m-3">
          <ul className="list-group bg-transparent">
            {
              videos.map(video => (
                <li className="list-group-item bg-transparent" key={video.id}>
                  <Link to={`/${video.id}`}>
                    <div className="row bg-transparent side-list-item">
                      <div className="col-3  side-list-image">
                        <img src={video.thumbnail}/>
                      </div>
                      <div className={`col side-list-label text-truncate ${this.props.darkTheme? 'dark-theme' : 'light-theme'}`}>
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
}

const mapStateToProps = state => ({
  darkTheme: state.theme.darkTheme,
  favorites: state.user.favorites,
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Favorites)
