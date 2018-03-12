import React from 'react';
import { connect } from 'react-redux';

import * as ProfileActions from '../store/profile/actions';
import * as ProfileSelectors from '../store/profile/selectors';

import EditForm from '../components/EditForm.jsx';

class EditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formValue: this.props.user,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({formValue: nextProps.user});
  }

  onChange(formValue, path) {
    this.setState({formValue});
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.edit(this.state.formValue);
  }

  render() {
    return (
      <EditForm
        value={this.state.formValue}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
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
    edit: (values) => {
      dispatch(ProfileActions.editUserData(values));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
