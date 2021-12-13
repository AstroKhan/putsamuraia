import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
}
  render() {
    if (!this.props.initialized) {
    return <Preloader/>
}
  return (
    <div className="app-wrapper">
    <HeaderContainer />
    <Navbar />
    <div className="app-wrapper-content">

    
    <Route path='/dialogs' render={ () => <DialogsContainer />} />
    <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
    <Route path='/users' render={ () => <UsersContainer />} />
    <Route path='/login' render={ () => <LoginPage />} />

    <Route path='/news' render={ () => <News />} />
    <Route path='/music' render={ () => <Music />} />
    <Route path='/settings' render={ () => <Settings />} />
    </div>
    </div>
  );
};
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;