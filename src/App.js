import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import React, { Component, Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some erreor occured");
  }

componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
}
componentWillUnmount() {
  window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)

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

  <Switch>
    <Route exact path='/' 
      render={() => <Redirect to={"/profile"} />} />

    <Route path='/dialogs' 
      render={withSuspense(DialogsContainer)} />
    <Route path='/profile/:userId?' 
      render={withSuspense(ProfileContainer)} />
    <Route path='/users' render={ () => <UsersContainer />} />
    <Route path='/login' render={ () => <LoginPage />} />
    <Route path='*' render={ () => <div>404 NOT FOUND</div>} />

    <Route path='/news' render={ () => <News />} />
    <Route path='/music' render={ () => <Music />} />
    <Route path='/settings' render={ () => <Settings />} />
  </Switch>
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