import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchExecuted } from '../actions/searchActions'

class VideosList extends Component {
  async componentDidMount() {
    if(!this.props.videos.length)
      this.props.searchExecuted(this.props.query)
  }
  render() {
    const videos = this.props.videos
    return (
      <div className="bg-transparent side-list">
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
    )
  }
}

const mapStateToProps = state => ({
  videos: state.search.videos,
  query: state.search.query,
  darkTheme: state.theme.darkTheme
})

export default connect(mapStateToProps, {searchExecuted})(VideosList)
