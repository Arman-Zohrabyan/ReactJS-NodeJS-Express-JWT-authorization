import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes.jsx';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './store/reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(reducers), 
  composeEnhancers(applyMiddleware(thunk))
);

ReactDom.render(
  <Provider store={ store }>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('react-app')
);
