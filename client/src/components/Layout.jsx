import React, { Fragment } from 'react';
import { IndexLink, browserHistory } from 'react-router';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import * as AuthActions from '../store/auth/actions';
import * as AuthSelectors from '../store/auth/selectors';

import Auth from '../modules/Auth';



class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  redirect(link, event) {
    event.preventDefault();
    this.navBar.refs.inner.handleCollapse();
    browserHistory.push(link);
  }

  showNotify(options) {
    toast(options.content, {
      closeButton: false,
      hideProgressBar: true,
      autoClose: 4000,
      type: options.type,
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.notify.isVisible) {
      this.showNotify(nextProps.notify);
      this.props.removeNotify();
    }
  }

  render() {
    return(
      <Fragment>
        <ToastContainer className="text-center" newestOnTop={true} />
        <Navbar collapseOnSelect={true} className="cusomize-navbar" ref={navBar => {this.navBar = navBar;}}>
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
                  <NavItem eventkey={1} href="#" onClick={this.redirect.bind(this, '/logout')} className="navbar-link">Log Out</NavItem>
                ) : (
                  <Fragment>
                    <NavItem eventkey={1} href="#" onClick={this.redirect.bind(this, '/login')} className="navbar-link">Log In</NavItem>
                    <NavItem eventkey={2} href="#" onClick={this.redirect.bind(this, '/signup')} className="navbar-link">Sign Up</NavItem>
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


function mapStateToProps(state) {
  return {
    notify: AuthSelectors.notify(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeNotify: () => {
      dispatch(AuthActions.removeNotify());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
