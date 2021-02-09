import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import VideosGrid from './components/VideosGrid';
import SideBar from './components/SideBar';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideBar/>
        <NavBar/>
        <VideosGrid />
      </div>
    </Provider>
  );
}

export default App;
