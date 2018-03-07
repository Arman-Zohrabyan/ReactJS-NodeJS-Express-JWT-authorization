import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
		  <div className="container">
		    <span
		      title="Dashboard"
		      subtitle="You should get access to this page only after authentication."
		    />

		    {this.props.secretData && <span style={{ fontSize: '16px', color: 'green' }}>{this.props.secretData}</span>}
		  </div>
    );
  }
}
