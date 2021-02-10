import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import VideosGrid from './components/VideosGrid';
import SideBar from './components/SideBar';
import { Provider } from 'react-redux'
import store from './store'
import { Switch, Route } from 'react-router-dom'
import VideoDetails from './components/VideoDetails';
import Favorites from './components/Favorites';
import LoginModal from './components/LoginModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideBar/>
        <NavBar/>
        <LoginModal/>
        <Switch>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/:id" render={(props) => <VideoDetails {...props}/>}/>
          <Route path="/" component={VideosGrid}/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
