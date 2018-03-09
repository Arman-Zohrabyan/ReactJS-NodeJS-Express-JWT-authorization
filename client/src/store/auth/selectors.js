// import _ from 'lodash';

export function getErrors(state) {
  return state.auth.errors;
}

export function notify(state) {
  return state.auth.notify;
}