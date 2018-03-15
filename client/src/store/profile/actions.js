import { browserHistory } from 'react-router';
import Api from '../../services/Api';
import Auth from '../../modules/Auth';

import * as ProfileSelectors from './selectors';

export const types = {
  SET_RESPONSE: 'Profile.SET_RESPONSE',
  SUCCESS_EDITED: 'Profile.SUCCESS_EDITED',
  SET_NEW_PROFILE_IMAGE: 'Profile.SET_NEW_PROFILE_IMAGE',
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

    
    browserHistory.push('/profile');

    dispatch({
      type: types.SUCCESS_EDITED,
      res: values,
    });

  };
}




export function setProfileImage(e) {
  return async (dispatch, getState) => {
    const userId = ProfileSelectors.userId(getState());
    const file = e.target.files[0];
    // FILE VALIDATION HERE

    let response = await Api.postFiles(`/api/changeProfileImage`, {
      image: file,
      id: userId,
    });

    dispatch({
      type: types.SET_NEW_PROFILE_IMAGE,
      res: response,
    });
  };
}