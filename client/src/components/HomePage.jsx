import React from 'react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
		  <div className="container">
        <span>This is the home page.</span>
		    <span>React Application</span>
		  </div>
    );
  }
}
