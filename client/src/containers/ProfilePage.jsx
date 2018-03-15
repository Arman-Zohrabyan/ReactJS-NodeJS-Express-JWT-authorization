import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Carousel, FieldGroup } from 'react-bootstrap';

import config from '../config';
const API_ENDPOINT = config.API_ENDPOINT;

import * as ProfileActions from '../store/profile/actions';
import * as ProfileSelectors from '../store/profile/selectors';


class ProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    // alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }


  
  render() {
    const { user } = this.props;
    let bDay = [];
    if(user.day) {
      bDay.push(user.day);
    }
    if(user.month) {
      bDay.push(user.month);
    }
    if(user.year) {
      bDay.push(user.year);
    }
    bDay = bDay.join("-");


    const { index, direction } = this.state;

    return (
      <Grid fluid={true}>
        <input type="file" id="edit" name="files" className="hidden" onChange={this.props.setProfileImage} />
        <Row>
          <Col xs={12} md={4}>
            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={this.handleSelect}
            >
              {
                user.profileImages.map((img, key) =>
                  <Carousel.Item key={key}>
                    <img width={900} height={500} alt="900x500" src={`${API_ENDPOINT}${img}`} />
                  </Carousel.Item>
                )
              }
            </Carousel>
            {/*              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/carousel.png" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/carousel.png" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            */}
            {/*       <Thumbnail className="img-container" alt="img" src={`${API_ENDPOINT}${user.profileImages[0]}`}>
              <div className="fa-block">
                <label htmlFor="edit"><i className="fa fa-edit middleSize" title="edit"></i></label>
                <i className="fa fa-plus middleSize" title="add"></i>
                <i className="fa fa-remove middleSize" title="delete"></i>
              </div>
            </Thumbnail>*/}

          </Col>
          <Col xs={12} md={8}>
            <h1>{`${user.name} ${user.surname}`}</h1>
            <Row>
              <Col xs={12} md={6}>
                <p>
                  <i className="fa fa-envelope" aria-hidden="true"></i> <a href={user.email}>{user.email}</a>
                </p>
                {user.address ?
                  <p>
                    <i className="fa fa-map-marker"></i> {user.address}
                  </p> : ""
                }
                {user.profession ?
                  <p>
                    <i className="fa fa-briefcase"></i> {user.profession}
                  </p> : ""
                }
                {bDay ?
                  <p>
                    <i className="fa fa-birthday-cake"></i> {bDay}
                  </p> : ""
                }
              </Col>
              <Col xs={12} md={6}>
                {user.gender ?
                  <p>
                    <i className={`fa fa-${user.gender.toLowerCase()}`}></i> {user.gender}
                  </p> : ""
                }
                {user.marital_status ?
                  <p>
                    <i className={`fa fa-${(user.marital_status.toLowerCase() == "married") ? "venus-mars" : "angellist"}`}></i> {user.marital_status}
                  </p> : ""
                }
              </Col>
            </Row>
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
    setProfileImage: (e) => {
      dispatch(ProfileActions.setProfileImage(e));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
