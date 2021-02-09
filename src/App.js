import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import VideosGrid from './components/VideosGrid';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <NavBar/>
      <VideosGrid />
    </div>
  );
}

export default App;
