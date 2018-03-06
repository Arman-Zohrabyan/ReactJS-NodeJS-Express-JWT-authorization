import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Layout from './components/Layout.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Auth from './modules/Auth';

export default (
  <div>
    <Route component={Layout} >
      <Route
        path="/"
        getComponent={
          (location, callback) => {
            Auth.isUserAuthenticated() ? callback(null, DashboardPage) : callback(null, HomePage);
          }}
      />
      <Route
        path="/login"
        onEnter={(nextState, replace) => {!Auth.isUserAuthenticated() || replace('/');}}
        component={LoginPage}
      />
      <Route
        path="/signup"
        onEnter={(nextState, replace) => {!Auth.isUserAuthenticated() || replace('/');}}
        component={SignUpPage}
      />
      <Route
        path="/logout"
        onEnter={(nextState, replace) => {
          Auth.deauthenticateUser();
          replace('/');
        }}
      />
    </Route>
    <Route path="/*" component={ErrorPage} />
  </div>
);

