import React from 'react';
import { connect } from 'react-redux';

import * as AuthActions from '../store/auth/actions';
import * as AuthSelectors from '../store/auth/selectors';

import LoginForm from '../components/LoginForm.jsx';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      user: {
        email: '',
        password: '',
      },
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }
  
  processForm(event) {
    event.preventDefault();
    this.props.logIn(this.state.user);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.props.errors}
        user={this.state.user}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    errors: AuthSelectors.getErrors(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logIn: (userData) => {
      dispatch(AuthActions.logIn(userData));
    },
    removeErrors: () => {
      dispatch(AuthActions.removeErrors());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
