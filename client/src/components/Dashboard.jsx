import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
		  <Card className="container">
		    <CardTitle
		      title="Dashboard"
		      subtitle="You should get access to this page only after authentication."
		    />

		    {this.props.secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.secretData}</CardText>}
		  </Card>
    );
  }
}

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired,
};
