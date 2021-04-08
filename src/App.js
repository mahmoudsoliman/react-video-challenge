import React, { Component } from 'react'
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom'
import VideoDetails from './components/VideoDetails';
import Favorites from './components/Favorites';
import LoginModal from './components/LoginModal';
import { darkThemeTriggered } from './actions/themeActions'
import { connect } from 'react-redux';
import './App.css';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className={`App container-fluid ${this.props.darkTheme? 'dark-theme' : 'light-theme'}`}>
        <NavBar/>
        <LoginModal/>
        <Switch>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/:id" render={(props) => <VideoDetails key={props.match.params.id} {...props}/>}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  darkTheme: state.theme.darkTheme
})

export default connect(mapStateToProps, {darkThemeTriggered})(App)
