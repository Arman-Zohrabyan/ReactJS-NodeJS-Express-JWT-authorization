import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Layout from './components/Layout.jsx';
import HomePage from './components/HomePage.jsx';
import Dashboard from './components/Dashboard.jsx';
import ErrorPage from './components/ErrorPage.jsx';

import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import ProfilePage from './containers/ProfilePage.jsx';
import FriendsPage from './containers/FriendsPage.jsx';
import UsersPage from './containers/UsersPage.jsx';
import TapePage from './containers/TapePage.jsx';
import EditPage from './containers/EditPage.jsx';

import Auth from './modules/Auth';




const logOut = (nextState, replace) => {
  Auth.deauthenticateUser();
  replace('/home');
};

const notAuth = (nextState, replace) => {
  !Auth.isUserAuthenticated() || replace('/profile');
};

const requireAuth = (nextState, replace) => {
  Auth.isUserAuthenticated() || replace('/home');
};

// const componentByAuth = (location, callback) => {
//   if(Auth.isUserAuthenticated()) {
//     browserHistory.push('/profile');
//   } else {
//     callback(null, HomePage);
//   }
// };getComponent={componentByAuth}


export default (
  <div>
    <Route path="/" component={Layout}>

      <IndexRedirect to="home"/>
      <Route path="/logout" onEnter={logOut} />
      
      <Route path="/home" onEnter={notAuth} component={HomePage} />
      <Route path="/login" onEnter={notAuth} component={LoginPage} />
      <Route path="/signup" onEnter={notAuth} component={SignUpPage} />

      <Route component={Dashboard}>
        <Route path="/profile" onEnter={requireAuth} component={ProfilePage} />
        <Route path="/friends" onEnter={requireAuth} component={FriendsPage} />
        <Route path="/users" onEnter={requireAuth} component={UsersPage} />
        <Route path="/tape" onEnter={requireAuth} component={TapePage} />
        <Route path="/edit" onEnter={requireAuth} component={EditPage} />
      </Route>

    </Route>
    <Route path="/*" component={ErrorPage} />
  </div>
);

