import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import t from 'tcomb-form';
const Form = t.form.Form;

const _year = [];
for(let i = 1920; i < 2019; i++) {
  _year.push(i);
}

const _month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const _day = [];
for(let i = 1; i < 32; i++) {
  _day.push(i);
}



const gender = t.enums.of(['Male', 'Famale'], 'gender');
const marital = t.enums.of(['Married', 'Single'], 'marital_status');
const year = t.enums.of(_year, 'year');
const month = t.enums.of(_month, 'month');
const day = t.enums.of(_day, 'day');




const FormSchema = t.struct({
  name: t.String,
  surname: t.maybe(t.String),
  profession: t.maybe(t.String),
  address: t.maybe(t.String),
  gender: gender,
  marital_status: marital,
  year: year,
  month: month,
  day: day,
});

const options = {
  fields: {
    marital_status: {
      factory: t.form.Radio,
    },
    gender: {
      factory: t.form.Radio,
    },
  },
};

export default class EditForm extends React.Component {
  render() {
    return (
      <div>
        <form action="/" onSubmit={this.props.onSubmit}>
          <Form
            value={this.props.value}
            type={FormSchema}
            options={options}
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