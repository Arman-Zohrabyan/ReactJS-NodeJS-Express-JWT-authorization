import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes.jsx';


ReactDom.render(
  (<Router history={browserHistory}>
    {routes}
  </Router>
  ), document.getElementById('react-app')
);
