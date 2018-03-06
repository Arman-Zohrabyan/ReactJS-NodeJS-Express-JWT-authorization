import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card className="container">
        <form action="/" onSubmit={this.props.onSubmit}>
          <h2 className="card-heading">Login</h2>

          {this.props.successMessage && <p className="success-message">{this.props.successMessage}</p>}
          {this.props.errors.summary && <p className="error-message">{this.props.errors.summary}</p>}

          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={this.props.errors.email}
              onChange={this.props.onChange}
              value={this.props.user.email}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={this.props.onChange}
              errorText={this.props.errors.password}
              value={this.props.user.password}
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Log in" primary />
          </div>

          <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
        </form>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};
