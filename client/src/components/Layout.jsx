import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <IndexLink to="/">Arman</IndexLink>
          </div>

          {Auth.isUserAuthenticated() ? (
            <div className="top-bar-right">
              <Link to="/logout">Log out</Link>
            </div>
          ) : (
            <div className="top-bar-right">
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          )}

        </div>

        { /* child component will be rendered here */ }
        {this.props.children}

      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};
