import { browserHistory } from 'react-router';
import Api from '../../services/Api';
import Auth from '../../modules/Auth';

export const types = {
  REMOVE_ERRORS: 'Auth.REMOVE_ERRORS',
  REMOVE_NOTIFY: 'Auth.REMOVE_NOTIFY',
  SET_RESPONSE: 'Auth.SET_RESPONSE',
};

export function register(data) {
  return async (dispatch) => {
    let response = await Api.post('/auth/signup', data);

    if(response.success) {
      browserHistory.push('/login');
    }

    dispatch({
      type: types.SET_RESPONSE,
      res: response,
    });
  };
}

export function removeErrors() {
  return {
    type: types.REMOVE_ERRORS,
  };
}
