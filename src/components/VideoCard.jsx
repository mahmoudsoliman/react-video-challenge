import React, { Component } from 'react'
import { connect } from 'react-redux'

export class VideoCard extends Component {
  render() {
    const {
      video
    } = this.props

    return (
      <div className={`card m-3 ${this.props.darkTheme? 'dark-theme' : 'light-theme'}`} key={video.id}>
        <img src={video.thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className={`card-title ${this.props.darkTheme? 'dark-theme' : 'light-theme'}`}>{video.title}</h5>
          <p className={`card-text ${this.props.darkTheme? 'dark-theme' : 'light-theme'}`}>{video.description}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  darkTheme: state.theme.darkTheme
})

export default connect(mapStateToProps)(VideoCard)