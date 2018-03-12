import { types } from './actions';

const initialState = {
  _id: '',
  email: '',
  name: '',
  createdAt: '',
};

function setResponse(state, response) {
  return Object.assign({}, state, response.user);
}

function successEdited(state, response) {
  const newState = Object.assign({}, state, response);
  return newState;
}

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {

  case types.SET_RESPONSE:
    return setResponse(state, action.res);

  case types.SUCCESS_EDITED:
    return successEdited(state, action.res);

  default:
    return state;
  }
}
