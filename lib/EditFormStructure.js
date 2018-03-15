import t from 'tcomb-form';

export default class EditFormStructure {
  static get years() {
    let _years = [];
    for(let i = 1920; i < 2019; i++) {
      _years.push(i);
    }
    return _years;
  }

  static get months() {
    return [
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
  }

  static get days() {
    const _days = [];
    for(let i = 1; i < 32; i++) {
      _days.push(i);
    }
    return _days;
  }


  static schema() {
    const gender = t.enums.of(['Male', 'Female'], 'gender');
    const marital = t.enums.of(['Married', 'Single'], 'marital_status');
    const year = t.enums.of(EditFormStructure.years, 'year');
    const month = t.enums.of(EditFormStructure.months, 'month');
    const day = t.enums.of(EditFormStructure.days, 'day');

    return t.struct({
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
  }

  static options() {
    return {
      fields: {
        marital_status: {
          factory: t.form.Radio,
        },
        gender: {
          factory: t.form.Radio,
        },
      },
    };
  }
}
