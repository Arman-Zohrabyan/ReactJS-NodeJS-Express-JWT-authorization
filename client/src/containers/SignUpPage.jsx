import React from 'react';
import { connect } from 'react-redux';

import * as AuthActions from '../store/auth/actions';
import * as AuthSelectors from '../store/auth/selectors';


import SignUpForm from '../components/SignUpForm.jsx';



class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        name: '',
        password: '',
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.signUp(this.state.user);
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
      <SignUpForm
        user={this.state.user}
        onChange={this.changeUser}
        onSubmit={this.onSubmit}
        errors={this.props.errors}
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
    signUp: (userData) => {
      dispatch(AuthActions.register(userData));
    },
    removeErrors: () => {
      dispatch(AuthActions.removeErrors());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);