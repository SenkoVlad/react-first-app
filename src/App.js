import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { HashRouter, Route, withRouter } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialize } from './redux/app-reducer'
import Preloader from './components/Common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store';
import { Provider } from 'react-redux'
import { SuspenseLoading } from './Hoc/suspenseLoading';
const DialogsContainer = React.lazy(() =>  import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() =>  import('./components/Profile/ProfileContainer'));
class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='dialog-container'>
          <Route path='/dialogs' render={(props) => SuspenseLoading(DialogsContainer)(props)} />
          <Route path='/profile/:userId?' render={(props) => SuspenseLoading(ProfileContainer)(props)} />
          <Route path='/music' render={() => <Music />} />  
          <Route path='/news' render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

let TempAppComponent = compose(
  withRouter,
  connect(mapStateToProps, { initialize }))
  (App);

let MainAppComponent = (props) => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <TempAppComponent />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  );
}

export default MainAppComponent;

//test commit