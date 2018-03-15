import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import t from 'tcomb-form';
const Form = t.form.Form;

import EditFormStructure from '../../../lib/EditFormStructure.js';

export default class EditForm extends React.Component {
  render() {
    return (
      <div>
        <form action="/" onSubmit={this.props.onSubmit}>
          <Form
            value={this.props.value}
            type={EditFormStructure.schema()}
            options={EditFormStructure.options()}
            onChange={this.props.onChange}
          />

          <ButtonToolbar>
            <Button bsStyle="info" className="custom-info-btn" type="submit">Edit</Button>
          </ButtonToolbar>
        </form>
      </div>
    );
  }
}