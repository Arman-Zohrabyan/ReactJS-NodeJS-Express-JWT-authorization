import { browserHistory } from 'react-router';
import Api from '../../services/Api';
import Auth from '../../modules/Auth';

export const types = {
  REMOVE_ERRORS: 'Auth.REMOVE_ERRORS',
  REMOVE_NOTIFY: 'Auth.REMOVE_NOTIFY',
  SET_RESPONSE: 'Auth.SET_RESPONSE',
  // FETCH_PROFILE_DONE: 'Auth.FETCH_PROFILE_DONE',
};

export function logIn(data) {
  return async (dispatch) => {
    // POST request to API
    let response = await Api.post('/auth/login', data);

    if(response.success) {
      Auth.authenticateUser(response.token);
      browserHistory.push('/profile');
    }

    dispatch({
      type: types.SET_RESPONSE,
      res: response,
    });
  };
}

// export function getUser() {
//   return async (dispatch) => {
//     try {
//       let params = new Map();
//       // POST request to API
//       let payload = await api.get('/auth/getUser', params);

//       if (payload.user) {
//         auth.setLocalUser(payload.user);
//         localStorage.setItem('loggedInUserEmail', payload.user.email);

//         dispatch({
//           type: types.FETCH_PROFILE_DONE,
//           payload: {
//             profile: payload.user,
//           },
//         });
//       }
//       dispatch(exceptionsActions.clear());
//     } catch (e) {
//       dispatch(exceptionsActions.process(e));
//     }
//   };
// }


export function removeErrors() {
  return {
    type: types.REMOVE_ERRORS,
  };
}

export function removeNotify() {
  return {
    type: types.REMOVE_NOTIFY,
  };
}

export function register(data) {
  return async (dispatch) => {
    // POST request to API
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

// export function logout() {
//   return async (dispatch) => {
//     localStorage.clear();
//     browserHistory.push('/');
//     window.location.reload();
//   };
// }