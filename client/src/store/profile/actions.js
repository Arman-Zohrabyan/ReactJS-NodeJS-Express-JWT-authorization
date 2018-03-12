import { browserHistory } from 'react-router';
import Api from '../../services/Api';
import Auth from '../../modules/Auth';

export const types = {
  SET_RESPONSE: 'Profile.SET_RESPONSE',
  SUCCESS_EDITED: 'Profile.SUCCESS_EDITED',
};

export function getCurrentUserData() {
  return async (dispatch) => {
    let response = await Api.get('/api/getUserData');

    if(!response.success) {
      Auth.deauthenticateUser();
      browserHistory.push('/');
    }

    dispatch({
      type: types.SET_RESPONSE,
      res: response,
    });
  };
}

export function editUserData(values) {
  return async (dispatch) => {
    let response = await Api.put('/api/editUserData', values);

    dispatch({
      type: types.SUCCESS_EDITED,
      res: values,
    });

  };
}