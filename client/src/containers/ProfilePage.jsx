import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

import * as ProfileActions from '../store/profile/actions';
import * as ProfileSelectors from '../store/profile/selectors';


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;

    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12} md={4}>
            <Thumbnail className="img-container" href="#" alt="img" src="/images/user.jpg">
              <div className="fa-block">
                <i className="fa fa-edit middleSize" title="edit"></i>
                <i className="fa fa-plus middleSize" title="add"></i>
                <i className="fa fa-remove middleSize" title="delete"></i>
              </div>
            </Thumbnail>

          </Col>
          <Col xs={12} md={8}>
            <h1>{`${user.name} ${user.surname}`}</h1>
            <i className="fa fa-envelope" aria-hidden="true"></i> <a href={user.email}>{user.email}</a>
          </Col>
        </Row>
      </Grid>
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
    // getUserData: () => {
    //   dispatch(ProfileActions.getCurrentUserData());
    // },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
