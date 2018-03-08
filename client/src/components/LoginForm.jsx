import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, ButtonToolbar, Button } from 'react-bootstrap';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {email: emailErrorMSG, password: passwordErrorMSG} = this.props.errors;

    return(
      <Grid>
        <Row>
          <Col xs={10} xsOffset={1} md={8} mdOffset={2} className="custom-border">
            <form action="/" onSubmit={this.props.onSubmit}>
              <h3 className="text-center">Login</h3>

              <Row>
                <Col xs={12} md={6} mdOffset={3}>
                  <FormGroup validationState={emailErrorMSG ? "error" : null} className="margin-0">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="text" name="email" onChange={this.props.onChange} value={this.props.user.email}/>
                    <HelpBlock>{emailErrorMSG}</HelpBlock>
                    <FormControl.Feedback />
                  </FormGroup>

                  <FormGroup validationState={passwordErrorMSG ? "error" : null} className="margin-0">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" name="password" onChange={this.props.onChange} value={this.props.user.password}/>
                    <HelpBlock>{passwordErrorMSG}</HelpBlock>
                    <FormControl.Feedback />
                  </FormGroup>

                  <ButtonToolbar>
                    <Button bsStyle="info" className="custom-info-btn" type="submit">Log In</Button>
                  </ButtonToolbar>

                  <div className="text-center padding-15-0">
                    <span>Don't have an account? <Link to={'/signup'}>Create one</Link>.</span>
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
