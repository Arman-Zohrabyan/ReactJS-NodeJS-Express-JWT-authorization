import React, { Fragment } from 'react';
import { IndexLink, browserHistory } from 'react-router';
import Auth from '../modules/Auth';
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  redirect(link, event) {
    event.preventDefault();
    browserHistory.push(link);
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
            <Nav activekey={1} pullRight>
              {
                Auth.isUserAuthenticated() ? (
                  <NavItem eventkey={1} href="#" onClick={this.redirect.bind(this, '/logout')} className="navbar-link">Log out</NavItem>
                ) : (
                  <Fragment>
                    <NavItem eventkey={1} href="#" onClick={this.redirect.bind(this, '/login')} className="navbar-link">Log in</NavItem>
                    <NavItem eventkey={2} href="#" onClick={this.redirect.bind(this, '/signup')} className="navbar-link">Sign up</NavItem>
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
