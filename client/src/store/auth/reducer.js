import { types } from './actions';

const initialState = {
  user: {},
  notify: {},
  errors: {},
  message: "",
  success: false,
};

function createNotify(newState) {
  const notify = {
    isVisible: true,
    content: newState.message,
  };
  if(newState.success) {
    notify.type = "success";
  } else {
    notify.type = "error";
  }
  return notify;
}

function setResponse(state, response) {
  const newState = Object.assign({}, state, response);
  newState.notify = createNotify(newState);
  return newState;
}

function removeErrors(state) {
  const newState = Object.assign({}, state);
  newState.errors = {};
  return newState;
}

function removeNotify(state) {
  const newState = Object.assign({}, state);
  newState.notify = {};
  return newState;
}


export default function reduce(state = initialState, action = {}) {
  switch (action.type) {

  case types.REMOVE_ERRORS:
    return removeErrors(state);

  case types.REMOVE_NOTIFY:
    return removeNotify(state);

  case types.SET_RESPONSE:
    return setResponse(state, action.res);

  default:
    return state;
  }
}
