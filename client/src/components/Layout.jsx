import React, { Fragment } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import { Navbar, Nav } from "react-bootstrap";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Fragment>
        <Navbar collapseOnSelect className="cusomize-navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">Arman</IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {
                Auth.isUserAuthenticated() ? (
                  <li key={1}>
                    <Link to="/logout" className="navbar-link">Log out</Link>
                  </li>
                ) : (
                  <Fragment>
                    <li key={1}>
                      <Link to="/login" className="navbar-link">Log in</Link>
                    </li>
                    <li key={2}>
                      <Link to="/signup" className="navbar-link">Sign up</Link>
                    </li>
                  </Fragment>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.props.children}
      </Fragment>
    );
  }
}
