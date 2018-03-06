import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
		  <Card className="container">
		    <CardTitle title="React Application" subtitle="This is the home page." />
		  </Card>
    );
  }
}
