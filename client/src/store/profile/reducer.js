import { types } from './actions';

const initialState = {
  _id: '',
  email: '',
  name: '',
  createdAt: '',
  profileImages: [],
};

function setResponse(state, response) {
  const changedData = response.user || response;
  return Object.assign({}, state, changedData);
}

function successEdited(state, response) {
  const newState = Object.assign({}, state, response);
  return newState;
}

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {

  case types.SET_RESPONSE:
    return setResponse(state, action.res);

  case types.SET_NEW_PROFILE_IMAGE:
    return setResponse(state, action.res);

  case types.SUCCESS_EDITED:
    return successEdited(state, action.res);

  default:
    return state;
  }
}
