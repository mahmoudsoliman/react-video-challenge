import React, { Component } from 'react'
import { connect } from 'react-redux'
import VideosGrid from './VideosGrid'

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={`home-title ${this.props.darkTheme? 'dark-theme': 'light-theme'}`}>Welcome To The Challenge!</h1>
        <VideosGrid/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  darkTheme: state.theme.darkTheme
})

export default connect(mapStateToProps, {})(Home)