import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom'
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import './redux/state'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='dialog-container'>
          <Route path='/dialogs' render={() => <Dialogs state={props.dialogsPage}/>} />
          <Route path='/profile' render={() => <Profile state={props.profilePage}/>} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;