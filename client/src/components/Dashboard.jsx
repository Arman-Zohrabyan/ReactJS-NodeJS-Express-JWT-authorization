import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as ProfileActions from '../store/profile/actions';
import * as ProfileSelectors from '../store/profile/selectors';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: props.location.pathname,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.getUserData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({activeSection: nextProps.location.pathname});
  }

  redirect(link, event) {
    event.preventDefault();
    browserHistory.push(link);
  }

  handleSelect(eventKey) {
    event.preventDefault();
    this.setState({activeSection: eventKey});
  }

  render() {
    return(
      <div className="container">
        <Nav bsStyle="tabs" activeKey={`${this.state.activeSection}`} onSelect={k => this.handleSelect(k)}>
          <NavItem eventKey="/profile" onClick={this.redirect.bind(this, '/profile')}>
            Profile
          </NavItem>
          <NavItem eventKey="/friends" onClick={this.redirect.bind(this, '/friends')}>
            Friends
          </NavItem>
          <NavItem eventKey="/users" onClick={this.redirect.bind(this, '/users')}>
            Users
          </NavItem>
          <NavItem eventKey="/tape" onClick={this.redirect.bind(this, '/tape')}>
            Tape
          </NavItem>
          <NavItem eventKey="/edit" className="nav-right" onClick={this.redirect.bind(this, '/edit')}>
            Edit
          </NavItem>
        </Nav>

        <div className="dashboard-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: ProfileSelectors.user(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserData: () => {
      dispatch(ProfileActions.getCurrentUserData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
