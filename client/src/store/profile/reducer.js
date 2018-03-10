import { types } from './actions';

const initialState = {
  _id: '',
  email: '',
  name: '',
  createdAt: '',
};


export default function reduce(state = initialState, action = {}) {
  switch (action.type) {

  // case types.REMOVE_ERRORS:
  //   return removeErrors(state);

  default:
    return state;
  }
}
